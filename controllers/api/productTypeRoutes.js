const router = require('express').Router();
const { ProductType } = require('../../models');

router.get('/', (req, res) => {
    ProductType.findAll().then((productTypeData) => {
        res.json(productTypeData)
    })
});

router.get('/:id', (req, res) => {
    ProductType.findByPk(req.params.id).then((productTypeData) => {
        res.json(productTypeData)
    })
});

// create a new product type
router.post('/', (req, res) => {
    ProductType.create(req.body)
        .then((newProductTypeData) => {
            res.json(newProductTypeData);
        }).catch((err) => {
            res.json(err)
        })
});

// update a product type by its `id` value
router.put('/:id', (req, res) => {
    ProductType.update(
        {
            product_type: req.body.product_type,
            base_price: req.body.base_price,
        },
        {
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(204).end();
        });
});



router.delete('/:id', (req, res) => {
    ProductType.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(204).end();
    });
});


module.exports = router;
