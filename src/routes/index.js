const exprees = require('express');

const router = exprees.Router();
const Data = require('../models/data');

router.get('/', (req, res) => {
    
    Data.find()
        .then(resp => res.send(resp))
        .catch(err => res.status(resp.statusCode).send(err));
})

router.post('/', (req, res) => {

    const data = new Data(req.body);

    var date = new Date();
    var date = new Date(date - 18000000);
    
    data.date = date;

    console.log(data);

    data.save()
        .then(resp => res.send("saved"))
        .catch(err => res.status(resp.statusCode).send(err));
});

router.delete('/', (req, res) => {

    Data.deleteMany()
        .then(resp => res.send(resp))
        .catch(err => res.send(err));
});

module.exports = router;