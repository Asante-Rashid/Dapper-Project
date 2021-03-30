const router = require('express').Router();
const { Orders } = require('../../models');

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




module.exports = router;
