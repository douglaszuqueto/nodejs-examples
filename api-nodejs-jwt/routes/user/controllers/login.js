const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const secret = require('../../../config/jwt').secret;

module.exports = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {

        if (err) throw err;

        if (!user) {
            return res.status(401).send({
                success: false, message: 'Failed to authenticate user.'
            });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                return res.status(401).send({
                    success: false, message: 'Failed to authenticate user.'
                });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, secret, {
                    expiresIn: '5m' // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }
    });
};
