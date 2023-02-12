const mongoose = require("mongoose")
const express = require('express')
mongoose.set("strictQuery", false);
const bodyParser = require('body-parser');
const Router = express.Router()
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    
    email: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        minlength: 8,
        required: true,
    },
})
const User = mongoose.model("user", UserSchema)
Router.get('/check',(req,res) => {
    res.send("user auth")
})
Router.post('/login',async (req, res) => {
    try {
        const user = await User.findOne({ email, password })
        if (!user) {
            res.status(401).json({
                message: "Login not successful",
                error: "User not found",
            })
        } else {
            res.status(200).json({
                message: "Login successful",
                user,
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
});
Router.post('/register',(req,res) => {
    console.log('check me')
    const { name, email,password } = req.body
    console.log(name,email,password)
    if (password.length < 8) {
        return res.status(400).json({ message: "Password less than 8 characters" })
    }
    try {
        const usr = new User({
            name,
            password,
            email,
        })
        usr.save()
        .then(doc => {
        res.send(doc)
        })
        .catch(err => {
        res.send(err)
        })
    } catch (err) {
        res.status(401).json({
            message: "User not successful created",
            error: error.mesage,
        })
    }
});
module.exports = Router