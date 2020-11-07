const dataStore = require('nedb-promise');
const { hashPassword, matchPassword } = require('./hashpassword');
const { generateToken } = require('./token')
const { v4: uuidv4 } = require('uuid');
const userDb = new dataStore({ filename: './dataBase/userslist.db', autoload: true, })

module.exports = {
    async createUser(body) {
        const user = await userDb.findOne({ name: body.userName })
        if (user) {
            return false
        } else {
            const passwordHash = await hashPassword(body.password);
            const newuuid = uuidv4();
            const newUser = {
                userName: body.userName,
                email: body.email,
                password: passwordHash,
                uuid: newuuid,
            }
            console.log(newUser)
            return await userDb.insert(newUser)
        }
    },
    async authorizeUser(body) {
        const user = await userDb.findOne({ userName: body.userName })
        console.log(user)
        if (!user) {
            return false;
        } else {
            const passwordMatch = await matchPassword(body.password, user.password);
            console.log(passwordMatch)
            if (passwordMatch) {
                const payload = {
                    userName: user.userName,
                    id: user._id,
                    uuid: user.uuid,
                }
                console.log(payload)
                const token = generateToken(payload);
                // const userAuthorize = {
                //     token: token,
                //     // user: {
                //     //     userName: user.userName,
                //     // }
                // }
                return token
            } else {
                return false
            }
        }
    },
    async findUser(userName) {
        const user = await userDb.findOne({ userName: userName })
        return user;
    },
    async findUserByuuid(uuid) {
        const user = await userDb.findOne({ uuid: uuid })
        return user;
    }
}