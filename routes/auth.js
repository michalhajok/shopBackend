const express = require("express");
const bcrypt = require("bcrypt");
const httpStatus = require("http-status");
const Auth = require("../models/Auth");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const allUsers = await Auth.find();
        res.json(allUsers);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const auth = await Auth.findOne({
        email: req.body.email,
        });
        if (auth) {
            const { _id, email, password, name, lastname, sex, birthday, phone} = auth
            if (bcrypt.compareSync(req.body.password, password)) {
                res.status(httpStatus.OK).json({
                    _id,
                    email,
                    name, 
                    lastname, 
                    sex, 
                    birthday, 
                    phone
                });
            } else {
                res.status(httpStatus.FORBIDDEN).json("bad password");
            }
        } else {
        res.status(httpStatus.FORBIDDEN).json("Bad user");
        }
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
});

router.post("/register", async (req, res) => {
    const {
        email,
        password,
        name,
        lastname,
        sex,
        phone,
        birthday
    } = req.body;
    



    try {    
        let hashed = bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                const user = new Auth({
                    email: email,
                    password: hash,
                    name: name,
                    lastname: lastname,
                    sex: sex,
                    phone: phone,
                    birthday: Date(birthday)
                });
                
                const savedUser = user.save();
                res.status(201).json(savedUser);
                
            })
        })


    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).status(error);
    }
});

module.exports = router;
