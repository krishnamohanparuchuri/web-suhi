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

router.get('/streams', verifyToken.authorize, async (req, res) => {
    const userStreams = await Streams.getStreams(req.user);
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

router.delete('/stream', verifyToken.authorize, async (req, res) => {
    console.log(req.body)
    const product = await Streams.removeStream(req.body, req.user)
    if (product) {
        res.status(200).json({
            message: "Product is deleted",
            "id": req.body.id
        })
    } else {
        res.status(404).json({ message: 'you are not able to delete' })
    }

})

router.delete('/streams', verifyToken.authorize, async (req, res) => {
    const product = await Streams.removeAllStreams(req.user)
    if (product) {
        res.status(200).json({
            message: "All Products are deleted",
        })
    } else {
        res.status(404).json({ message: 'you are not able to delete' })
    }

})

module.exports = router;