const { Router } = require('express');
const router = new Router();

router.get('/', async (req, res) => {
    res.status(200).send({
        userName: 'krishna',
        password: '123456789',
        website: 'www.example2.com'
    })

})

module.exports = router;