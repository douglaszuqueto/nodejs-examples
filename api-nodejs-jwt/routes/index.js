module.exports = (app) => {

    /**
     * Index
     */
    app.get('/', (req, res) => res.json('ok'));

    /**
     * User
     */
    app.use('/users', require('./user/user'));

    /**
     * Protected Route
     */
    app.get('/secret', require('../config/middlewares/jwt') ,(req, res) => res.json('ok'));

};
