const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.CRYPTR_KEY);

module.exports = {
    async textcryptr(description) {
        const encryptedString = await cryptr.encrypt(description);
        console.log(encryptedString)
        const stringFormat = String(encryptedString)
        console.log(stringFormat)
        return stringFormat
    }

}