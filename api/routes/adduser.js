const { Router } = require('express');
const router = new Router();
const User = require('../models/users.js');

router.post('/login', async (req, res) => {
    console.log(req.body)
    const token = await User.authorizeUser(req.body);
    console.log(token)
    if (token) {

        res.status(200).send({
            token: token
        })
    } else {
        res.status(401).json({
            error: "Not authorized"
        })
    }
})

router.post('/register', async (req, res) => {
    console.log(req.body)
    const user = await User.createUser(req.body);
    console.log(user)
    if (user) {
        res.status(200).json({
            message: 'user is created',
            user: {
                username: user.userName
            }
        })
    } else {
        res.status(400).json({
            message: 'User already exists'
        })
    }

})

module.exports = router;