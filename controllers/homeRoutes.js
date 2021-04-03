const router = require("express").Router();
const { Customer, Flavor, OrderItem, Orders, ProductType, Size, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard/today");
    return;
  }

  res.render("login");
});

router.get('/dashboard/:date', withAuth, async (req, res) => {
  let passDate;
  console.log("req.params.date: " + req.params.date);
  if (req.params.date === "today") {
    console.log("today code");
    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    passDate = `${ye}-${mo}-${da}`
    // passDate = new Date().toISOString().slice(0, 10);
  } else {
    passDate = req.params.date;
  }
  console.log("passDate: " + passDate)
  try {
    //  res.render("homepage", {

    // logged_in: req.session.logged_in,
    const dbOrderData = await Orders.findAll({
      order: ['pickup_time'],
      where: {
        pickup_date: passDate,
      },
      include: [
        {
          model: Customer,
          attributes: ['first_name', 'last_name'],
        },
        {
          model: User,
          attributes: ['first_name', 'last_name'],
        },
      ],
    });

    const orders = dbOrderData.map((order) =>
      order.get({ plain: true })
    );
    console.log(orders);
    res.render('homepage', {
      orders,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/customers", withAuth, async (req, res) => {
  try {
    // pulls data from customers table using sequalize
    const customerData = await Customer.findAll();
    // // Serialize the data so that the template can read it
    const customers = customerData.map((Customer) => Customer.get({ plain: true }));

    res.render("customers", {
      customers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/customer/:id', withAuth, async (req, res) => {
  try {
    const customerData = await Customer.findByPk(req.params.id);
    // , {
    //   include: [
    //     {
    //       model: OrderItem,
    //       attributes: ['product_type_id'],
    //     },
    //   ],
    // });

    const customer = customerData.get({ plain: true });
    console.log(customer);
    res.render('customer', { customer });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/orders", withAuth, async (req, res) => {
  try {
    res.render("orders", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/calendar", withAuth, async (req, res) => {
  try {
    res.render("calendar", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/create_order_item", async (req, res) => {
  try {

    const flavorData = await Flavor.findAll();
    const flavors = flavorData.map((flavor) => flavor.get({ plain: true }));

    const sizeData = await Size.findAll();
    const sizes = sizeData.map((size) => size.get({ plain: true }));

    res.render("reports", {
      flavors,
      sizes,  
      logged_in: req.session.logged_in,
    });
  }catch (err) {
    res.status(500).json(err);
  }
});

router.post("/create_order_item", withAuth, async (req, res) => {
  try {
    const flavorData = await Flavor.findAll();
    const flavors = flavorData.map(flavor => flavor.get({ plain: true }));

    const sizeData = await Size.findAll();
    const sizes = sizeData.map(size => size.get({ plain: true }));

    const productTypeData = await ProductType.findAll();
    const productType = productTypeData.map(productType => productType.get({ plain: true }));
    const { customerId, pickUpDate, pickUpTime, customerFirstName, customerLastName, customerPhoneNumber} = req.body;
    
    res.render("reports", {
      logged_in: req.session.logged_in,
      flavors,
      sizes,
      productType,
      customerId,
      pickUpDate,
      pickUpTime,
      customerFirstName,
      customerLastName,
      customerPhoneNumber
    });
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.get("/products/:order_id", withAuth, async (req, res) => {
  try {
    const orderId = req.params.order_id;
    
    // console.log(req.params);
    const orderData = await OrderItem.findAll({
      where: {
        id: orderId,
      }
    }); 
    console.log("\x1b[34m", orderData);
    //use this orderId to read the database and get all the info we need to pass to our template
    res.render("products", {
      logged_in: req.session.logged_in,
      orderData,
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new-employee", withAuth, async (req, res) => {
  try {
    res.render("new-employee", {
      logged_in: req.session.logged_in,
  
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
