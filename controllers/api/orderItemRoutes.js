const router = require('express').Router();
const { OrderItem, Flavor, Customer, Size, ProductType } = require('../../models');

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

// find one orderItemData by its `id` value
// router.get('/:id', (req, res) => {
//     OrderItem.findAll({
//         where: {
//             id: req.params.id
//         },
//         include: [{
//             model: Flavor,
//             model: Customer,
//             model: Size,
//             model: ProductType,
//         }]
//     }).then((orderItemData) => {
//         res.json(orderItemData)
//     })
// });



// TODO FIX THE create a new category
router.post('/', async (req, res) => {
    try {
        const newOrderItem = await OrderItem.create(req.body);
        res.status(200).json(newOrderItem);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }

    // console.log(req.body)
    // OrderItem.create(req.body)    
    //     .then((newOrderItemData) => {
    //         console.log(newOrderItemData)
    //         console.log("ïd")
    //         console.log(newOrderItemnpData.dataValues.id);
    //         res.json(newOrderItemData.dataValues.id);
    //     }).catch((err) => {
    //         res.json(err)
    //     })
});

module.exports = router;
