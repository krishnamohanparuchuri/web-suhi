const jwt = require('jsonwebtoken');
const { findUserByuuid } = require('../models/users')
const { generateToken } = require('../models/token')
require('dotenv').config();

module.exports = {
    async authorize(req, res, next) {
        const bearerHeader = req.headers['authorization'];

        if (typeof bearerHeader !== undefined) {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            // req.token = bearerToken;
            const data = jwt.verify(bearerToken, process.env.SECRET_KEY)
            console.log(data)
            const user = await findUserByuuid(data.uuid)

            req.token = generateToken(user)
            req.user = user;

            next()

        } else {
            res.status(401).send(JSON.stringify({
                sucess: false,
                error: 'not a valid token'
            }))
        }

        // try {
        //     const bearerHeader = req.headers['authorization'];
        //     const  = bearerHeader.split('Bearer ', '');
        //     const data = jwt.verify(withoutBearer, process.env.SECRET_KEY);
        //     console.log(data)
        //     const user = await findUserByuuid(data);
        //     console.log(user)
        //     req.user = user;

        //     next()

        // } catch (error) {
        //     res.status(401).send(JSON.stringify({
        //         sucess: false,
        //         error: 'not a valid token'
        //     }))
        // }
        //     const secret = process.env.SECRET_KEY;
        //     const token = req.headers.authorization;
        //     console.log(token)
        //     // const token = req.headers.authorization.replace('Bearer ', '');
        //     // console.log(token);
        //     // const data = jwt.verify(token, secret);
        //     // console.log(data)
        //     // const user = await findUser(data);
        //     // console.log(user)

        //     // req.token = refreshToken(user)
        //     // req.user = user;
        //     // next();
        //     if (!token) {
        //         res.status(400).json({
        //             message: 'token is not found'
        //         })
        //     }
        //     try {
        //         const data = await jwt.verify(token.replace("Bearer ", ""), process.env.SECRET)
        //         console.log(data)

        //     }
        //     catch (err) {
        //         res.status(400).json({ message: 'user is not verified' })
        //     }
        //     next();
        // }
    }
};
