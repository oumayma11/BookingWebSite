const express = require("express");
const router = express.Router();
const db = require("../models");
const Client = require("../models/client");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


process.env.SECRET_KEY = 'secret'


//CRUD CLIENT

//get all clients
router.get("/all", (req, res) => {
    db.Client.findAll().then(clients => res.send(clients));
});

//get client by id

router.get("/find/:id", (req, res) => {
    db.Client.findAll({
        where: {
            id: req.params.id
        }
    }).then(client => res.send(client));
});

//post client
router.post("/new", (req, res) => {
    

          db.Client.findOne({
        where: {
            email: req.body.email
        }
    })
            //TODO bcrypt
            .then(client => {
                if (!client) {
                    
                    db.Client.create({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: req.body.password,
                        address: req.body.address,
                        birthDate: req.body.birthDate
                    })
                            .then(client => {
                                res.json({ status: client.email + 'Registered!' })
                            })
                            .catch(err => {
                                res.send('error: ' + err)
                            })
                    
                } else {
                    res.json({ error: 'User already exists' })
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })


    
});

//delete client
router.delete("/delete/:id", (req, res) => {
    db.Client.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("sucess"));
});

//update client
router.put("/update", (req, res) => {
    db.Client.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        birthDate: req.body.birthDate

    },
        {
            where: { id: req.body.id }
        }
    ).then(() => res.send("updated successfuly"));
});


//login Client


router.post('/login', (req, res) => {
    db.Client.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(client => {
            if (client) {
                if (req.body.password== client.password) {
                   let  token = jwt.sign(client.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        });
});


//decoding token
router.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    db.Client.findOne({
        where: {
            id: decoded.id
        }
    })
        .then(client => {
            if (client) {
                res.json(client)
            } else {
                res.send('User does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        });
});

module.exports = router;