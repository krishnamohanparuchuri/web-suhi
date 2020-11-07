const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = {
    async hashPassword(passwordToHash) {
        return await bcrypt.hash(passwordToHash, saltRounds)
    },
    async matchPassword(userPassword, hash) {
        const matched = await bcrypt.compare(userPassword, hash);
        return matched
    }
}