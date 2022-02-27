const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./user');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//database connection
const dbURI = "mongodb+srv://viyaaat:Akash372001@nodetuts.h8kjj.mongodb.net/lab4?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('Welcome');
        app.listen(3003);
    })
    .catch((err) => console.log(err));

//routes
app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.post('/', (req, resp) => {
    const obj = req.body;
    id = obj.id;
    delete obj.id;
    if (id == '') {
        User.create(obj, (err, res) => {
            //console.log(res);
            resp.send(res._id.toString());
        });
    }
    else {
        User.findByIdAndUpdate(id, obj, (err, res) => {
            // console.log(res);
            resp.send(res._id.toString());
        });
    }
})

app.get('/user', (req, resp) => {
    const id = req.query.id;
    //console.log(id);
    User.findById(id, (err, res) => {
        resp.send(res);
    });
})