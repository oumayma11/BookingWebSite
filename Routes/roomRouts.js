const express = require("express");
const router = express.Router();
const db = require("../models");
const Room = require("../models/room");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


process.env.SECRET_KEY = 'secret'


//CRUD Room

//get all rooms
router.get("/allRoom", (req, res) => {
    db.Room.findAll().then(rooms => res.send(rooms));
});

//get room by id

router.get("/findRoom/:id", (req, res) => {
    db.Room.findAll({
        where: {
            id: req.params.id
        }
    }).then(room => res.send(room));
});

//post Room
router.post("/newRoom", (req, res) => {

                db.Room.create({
                    roomType: req.body.roomType,
                    lastName: req.body.lastName,
                    image: req.body.image,
                    nbRoomAvailable: req.body.nbRoomAvailable,
                    price: req.body.price
                })
                    .then(room => {
                        res.json({ status: 'room added ssucc' })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })

            
       
        .catch(err => {
            res.send('error: ' + err)
        })



});

//delete room
router.delete("/deleteRoom/:id", (req, res) => {
    db.Room.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("sucess"));
});

//update Room
router.put("/updateRoom", (req, res) => {
    db.Room.update({
        roomType: req.body.roomType,
        lastName: req.body.lastName,
        image: req.body.image,
        nbRoomAvailable: req.body.nbRoomAvailable,
        price: req.body.price

    },
        {
            where: { id: req.body.id }
        }
    ).then(() => res.send("Room updated successfuly"));
});


//count rooms nbre:
router.get("/countRoom", (req, res) => {

    var nb = console.log(Room.length);
    res.send(console.log(nb));
});

//decrement nb room available after booking
router.get("/countRoomAvailable", (req, res) => {
    db.Room.findOne({
        where: {
            bookingId: req.params.bookingId
        }
    })
        .then(room => {
            
                if (req.body.bookingId != null) {
                    var nb = console.log(Room.length);


                    res.send(nb)
                
            }
        });
        
});

module.exports = router;