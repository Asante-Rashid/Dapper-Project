const router = require('express').Router();
const { Customer } = require('../../models');

router.get('/', (req, res) => {
    Customer.findAll().then((CustomerData) => {
        res.json(CustomerData)
    })
});

router.get('/:id', (req, res) => {
    Customer.findByPk(req.params.id).then((CustomerData) => {
        res.json(CustomerData)
    })
});

// create a new customer
router.post('/', (req, res) => {
    Customer.create(req.body)
        .then((newCategory) => {
            res.json(newCategory);
        }).catch((err) => {
            res.json(err)
        })
});

// update a customer by its `id` value
router.put('/:id', (req, res) => {
    Customer.update(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            addrLine1: req.body.addrLine1,
            addrLine2: req.body.addrLine2,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
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
    Customer.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(204).end();
    });
});

module.exports = router;

