const router = require('express').Router();
const { Flavor } = require('../../models');

router.get('/', (req, res) => {
    Flavor.findAll().then((flavorData) => {
        res.json(flavorData)
    })
});

router.get('/:id', (req, res) => {
    Flavor.findByPk(req.params.id).then((flavorData) => {
        res.json(flavorData)
    })
});

// create a new flavor
router.post('/', (req, res) => {
    Flavor.create(req.body)
        .then((newFlavor) => {
            res.json(newFlavor);
        }).catch((err) => {
            res.json(err)
        })
});

// update a flavor by its `id` value
router.put('/:id', (req, res) => {
    Flavor.update(
        {
            flavor_name: req.body.flavor_name,
            description: req.body.description,
            dough_type: req.body.dough_type,
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
    Flavor.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(204).end();
    });
});


module.exports = router;
