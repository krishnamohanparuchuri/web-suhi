const { Router } = require('express');
const router = new Router();
const Streams = require('../models/streams.js');
const verifyToken = require('../middlewares/verifytoken')

router.post('/streams', verifyToken.authorize, async (req, res) => {

    const newStream = await Streams.addStreams(req.body, req.user);
    console.log(newStream)
    if (newStream) {

        res.status(200).send({
            user: 'new stream has been added to streams database',
            newStream: newStream,
        })
    } else {
        res.status(404).json({
            error: "Not authorized"
        })
    }
})

router.get('/streams', async (req, res) => {
    const userStreams = await Streams.getStreams();
    console.log(userStreams)
    if (userStreams) {
        res.status(200).json({
            message: 'all streams are displayed',
            streams: userStreams,

        })
    } else {
        res.status(400).json({
            message: 'Not authorized'
        })
    }

})

module.exports = router;