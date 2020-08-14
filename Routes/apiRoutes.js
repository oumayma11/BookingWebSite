const express = require("express");
const router = express.Router();
const db = require("../models");

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
    db.Client.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        birthDate: req.body.birthDate
    }).then(submitedClient => res.send(submitedClient));
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
module.exports = router;