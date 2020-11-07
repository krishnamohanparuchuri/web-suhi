const dataStore = require('nedb-promise');
const { v4: uuidv4 } = require('uuid');
const streamsDB = new dataStore({ filename: './dataBase/streamslist.db', autoload: true, })
const users = require('./users')
const Crypt = require('./cryptr')

module.exports = {
    async addStreams(body, userInfo) {
        console.log(body, userInfo)
        const user = await users.findUserByuuid(userInfo.uuid)
        console.log(user)
        if (!user) {
            return false
        } else {
            const encryptedDescription = await Crypt.textcryptr(body.description)
            const timeStamp = new Date().toUTCString();
            const newStream = {
                // userName: body.userName,
                title: body.title,
                uuid: userInfo.uuid,
                description: encryptedDescription,
                date: timeStamp
            }
            console.log(newStream)
            return await streamsDB.insert(newStream)
        }

    },
    async getStreams() {
        return await streamsDB.find({})
    }
}