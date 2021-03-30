const router = require('express').Router();
const { Size } = require('../../models');

router.get('/', (req, res) => {
    Size.findAll().then((flavorData) => {
        res.json(flavorData)
    })
});

router.get('/:id', (req, res) => {
    Size.findByPk(req.params.id).then((sizeData) => {
        res.json(sizeData)
    })
});

// create a new size
router.post('/', (req, res) => {
    Size.create(req.body)
        .then((sizeData) => {
            res.json(sizeData);
        }).catch((err) => {
            res.json(err)
        })
});

// update a size by its `id` value
router.put('/:id', (req, res) => {
    Size.update(
        {
            size: req.body.size,
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
    Size.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(204).end();
    });
});


module.exports = router;
