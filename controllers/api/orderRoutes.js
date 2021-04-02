const router = require('express').Router();
const { Orders, Customer, User } = require('../../models');

router.get('/', (req, res) => {
    Orders.findAll().then((orderData) => {
        res.json(orderData)
    })
});


router.get('/:id', (req, res) => {
    Orders.findByPk(req.params.id).then((orderData) => {
        res.json(orderData)
    })
});

router.post('/', async (req, res) => {
    try {
      const newOrder = await Customer.create(req.body);
  
      res.status(200).json(newOrder);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
