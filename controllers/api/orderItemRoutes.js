const router = require('express').Router();
const { OrderItem, Flavor, Customer, Size, ProductType, User } = require('../../models');

router.get('/', (req, res) => {
    OrderItem.findAll().then((orderItemData) => {
        res.json(orderItemData)
    })
});

router.get('/:id', (req, res) => {
    OrderItem.findByPk(req.params.id).then((orderItemData) => {
        res.json(orderItemData)
    })
});

router.get('/:id', (req, res) => {
    OrderItem.findByPk(req.params.id).then((orderItemData) => {
        res.json(orderItemData)
    })
});

// TODO FIX THE create a new category
router.post('/', (req, res) => {
    OrderItem.create(req.body)
        .then((newOrderItemData) => {
            res.json(newOrderItemData);
        }).catch((err) => {
            res.json(err)
        })
});

module.exports = router;
