const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

//mongo server IP: 192.168.1.12/iot     Alltic
//mongo server IP: 18.222.254.72/iot    Amazon
//mongo server IP: 18.191.253.54/iot    Amazon
//mongo server IP: 18.216.15.58/iot     Amazon
//mongo server IP: 127.0.0.1/test
//mongo server IP: 190.145.215.202:27017/dataiot    //base de datos Pablo

//connecting to db
mongoose.connect('mongodb://192.168.1.12/iot', {useNewUrlParser: true})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));

//importing routes
const index = require('./routes/index');

//settings

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Alllow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});
//routes
app.use('/', index);


//starting the server
app.listen(3000, () => {
    console.log('Server on port 3000');
});
