const dataStore = require('nedb-promise');
const { v4: uuidv4 } = require('uuid');
const streamsDB = new dataStore({ filename: './dataBase/streamslist.db', autoload: true, })
const users = require('./users')
const Cryptr = require('cryptr');
require('dotenv').config();
const cryptr = new Cryptr(process.env.CRYPTR_KEY);

module.exports = {
    async addStreams(body, userInfo) {
        console.log(body, userInfo)
        const user = await users.findUserByuuid(userInfo.uuid)
        console.log(user)
        if (!user) {
            return false
        } else {
            const encryptedDescription = await cryptr.encrypt(body.description)
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
    async getStreams(userInfo) {
        const streams = await streamsDB.find({ uuid: userInfo.uuid })
        const decryptStreams = streams.map(stream => {
            const decryptDescription = cryptr.decrypt(stream.description)
            console.log(decryptDescription)
            const streamData = {
                title: stream.title,
                description: decryptDescription,
                date: stream.date,
                id: stream._id,
            }
            console.log(streamData)
            return streamData
        })
        return decryptStreams
    },
    async removeStream(body, userInfo) {
        console.log(body)
        const product = await streamsDB.remove({ _id: body.id })
        console.log(product)
        return product > 0
    },
    async removeAllStreams(userInfo) {
        const product = await streamsDB.remove({ uuid: userInfo.uuid }, { multi: true })
        return product > 0
    },

}