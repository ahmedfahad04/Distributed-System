const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

const register = (req, res, next) => {

    // encrypt password
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {

        if (err) {
            res.json({
                error: err
            })
        }

        // create user
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        });

        // store user in database
        user.save()
            .then(user => {
                res.json({
                    message: 'User Added Successfully!'
                })
            })
            .catch(error => {
                res.json({
                    message: 'Registration Failed!'
                })
            })
    });


}

const show = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

const login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    user.findOne({ $or: [{ email: username }, { phone: username }] })
        .then(user => {
            if (user) {

                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }

                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'verySecretValue', { expiresIn: '1h' })
                        res.json({
                            message: 'Login Successful!',
                            token: token
                        })
                    } else {
                        res.json({
                            message: 'Password does not match!'
                        })
                    }
                })

            } else {
                res.json({
                    message: 'No User Found!'
                })
            }
        })
}

module.exports = {
    register, show, login
}