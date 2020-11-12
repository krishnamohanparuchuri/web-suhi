const jwt = require('jsonwebtoken');
require('dotenv').config()
module.exports = {
    generateToken(payload) {
        console.log(payload.uuid)
        return jwt.sign({ uuid: payload.uuid }, process.env.SECRET_KEY)
    }
}