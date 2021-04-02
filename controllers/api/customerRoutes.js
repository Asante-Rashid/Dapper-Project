const router = require('express').Router();
const { Customer, OrderItem } = require('../../models');

// router.get('/', (req, res) => {
//     Customer.findAll().then((CustomerData) => {
//         res.json(CustomerData)
//     })
// });

// ! this code was moved to the homeRoutes
// router.get('/customer/:id', async (req, res) => {
//   try {
//     const customerData = Customer.findByPk(req.params.id);
//     // , {
//     //   include: [
//     //     {
//     //       model: OrderItem,
//     //       attributes: ['product_type_id'],
//     //     },
//     //   ],
//     // });

//     const customer = customerData.get({ plain: true });

//     res.render('customer', { customer });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// create a new customer
// router.post('/', (req, res) => {
//     Customer.create(req.body)
//         .then((newCategory) => {
//             res.json(newCategory);
//         }).catch((err) => {
//             res.json(err)
//         })
// });

router.post('/', async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);

    res.status(200).json(newCustomer);
  } catch (err) {
    res.status(400).json(err);
  }
});

// // update a customer by its `id` value
// router.put('/:id', (req, res) => {
//     Customer.update(
//         {
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             phoneNumber: req.body.phoneNumber,
//             email: req.body.email,
//             addrLine1: req.body.addrLine1,
//             addrLine2: req.body.addrLine2,
//             city: req.body.city,
//             state: req.body.state,
//             zipCode: req.body.zipCode,
//         },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }).then(() => {
//             res.status(204).end();
//         });
// });

router.delete('/:id', (req, res) => {
  Customer.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;

