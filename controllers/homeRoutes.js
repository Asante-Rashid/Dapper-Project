const router = require("express").Router();
const { Customer, Flavor, OrderItem, Orders, ProductType, Size, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
       res.render("homepage", {
     
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/customers", async (req, res) => {
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

router.get("/orders", async (req, res) => {
  try {
    res.render("orders", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/calendar", async (req, res) => {
  try {
    res.render("calendar", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/reports", async (req, res) => {
  try {
    const flavorData = await Flavor.findAll();
    const flavors = flavorData.map(flavor => flavor.get({plain: true}));

    const sizeData = await Size.findAll();
    const sizes = sizeData.map(size => size.get({plain: true}));

    const productTypeData = await ProductType.findAll();
    const productType = productTypeData.map(productType => productType.get({ plain: true }));

    console.log(sizes);
    console.log(flavors);
    console.log(productType);

    res.render("reports", {
      logged_in: req.session.logged_in,
      flavors,
      sizes,
      productType
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/products", async (req, res) => {
  try {
    res.render("products", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new-employee", async (req, res) => {
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
