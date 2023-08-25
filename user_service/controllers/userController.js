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
                        let token = jwt.sign({ name: user.name, u_id: user._id }, process.env.ACCESS_TOKEN, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES })
                        let refreshToken = jwt.sign({ name: user.name, u_id: user._id }, process.env.REFRESH_TOKEN, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES })
                        console.log(token);
                        res.json({
                            message: 'Login Successful!',
                            token: token,
                            refreshToken: refreshToken,
                            username: user.name,
                            u_id: user._id
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

// middleware
const authenticate = (req, res, next) => {
    try {

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);

        req.user = decoded;
        // next();
        res.json({
            message: 'authenticated',
            user: req.user
        })

    } catch (error) {

        if(error.name == 'TokenExpiredError') {
            res.status(401).json({message: 'Session Expired!'});
        } else {
            res.json({message: 'Authentication Failed!'})
        }
    }
}

const remove = (req, res, next) => {
    let phone = req.body.phone;

    user.findOneAndDelete({phone: phone})
        .then(response => {
            res.json({
                message: 'User deleted successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

// careful about it when making connection with frontend [pending for frontend integration...]
const refreshToken = (req, res, next) => {

    const refreshToken = req.body.refreshToken;

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
        if(err) {
            res.status(400).json({
                err
            })
        }
        else {
            let token = jwt.sign({name: decoded.name}, process.env.ACCESS_TOKEN, {expiresIn: process.env.ACCESS_TOKEN_EXPIRES})
            let refreshToken = req.body.refreshToken;
            res.status(200).json({
                message: 'Token refreshed successfully',
                token: token,
                refreshToken: refreshToken
            })
        }
    })
}


module.exports = {
    register, show, login, authenticate, refreshToken, remove 
}