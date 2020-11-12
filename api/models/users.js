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
    },
    async addtag(inputData, userInfo) {
        const user = await userDb.findOne({ uuid: userInfo.uuid })
        console.log(user)
        if (!user.tags) {
            const userWithTag = await userDb.update({ uuid: userInfo.uuid }, { $set: { "tags": [] } })
            const newuserInfo = await userDb.update({ uuid: userInfo.uuid }, { $push: { tags: { tagName: inputData.tagName, id: new Date().getTime() } } })
            console.log(newuserInfo)
            return newuserInfo > 1
        } else {
            const newuserInfo = await userDb.update({ uuid: userInfo.uuid }, { $push: { tags: { tagName: inputData.tagName, id: new Date().getTime() } } })
            console.log(newuserInfo)
            return newuserInfo > 1
        }

    },
    async getTags(userInfo) {
        const user = await userDb.findOne({ uuid: userInfo.uuid })
        console.log(user.tag)
        return user
    },
    async removeTag(body, userInfo) {
        // const user = await userDb.findOne({ uuid: userInfo.uuid })
        // console.log(user)
        // return user

        const tagRemove = await userDb.update({ uuid: userInfo.uuid }, { $pop: { tags: body.id } })
        // console.log(user)
        // const tagInfo = user['tag']
        console.log(tagRemove)
        return tagRemove > 0
    },
    async removeAllTags(userInfo) {

        const deleteTag = await userDb.update({ uuid: userInfo.uuid }, { multi: true }, { $pop: { tags: [] } })
        console.log(deleteTag)
        return deleteTag > 0
    },
    async deleteUser(userInfo) {
        const user = await userDb.remove({ uuid: userInfo.uuid })
        return user > 0
    }

}
