const { Router } = require('express');
const router = new Router();
const User = require('../models/users.js');
const verifyToken = require('../middlewares/verifytoken')

router.post('/login', async (req, res) => {
    console.log(req.body)
    const token = await User.authorizeUser(req.body);
    console.log(token)
    if (token) {

        res.status(200).send({
            token: token
        })
    } else {
        res.status(401).json({
            error: "Not authorized"
        })
    }
})

router.post('/register', async (req, res) => {
    console.log(req.body)
    const user = await User.createUser(req.body);
    console.log(user)
    if (user) {
        res.status(200).json({
            message: 'user is created',
            user: {
                username: user.userName
            }
        })
    } else {
        res.status(400).json({
            message: 'User already exists'
        })
    }

})

router.post('/addtag', verifyToken.authorize, async (req, res) => {
    console.log(req.body)
    if (req.user) {
        const user = await User.addtag(req.body, req.user)
        console.log(user)
        const newUser = await User.findUserByuuid(req.user);
        console.log(newUser)
        res.status(200).json({
            message: "new tag has been added!!",
            newTag: {
                tagName: req.body.tagName
            }
        })
    } else {
        res.status(400).json({
            message: 'Unable to add the tag'
        })
    }

})
router.get('/tags', verifyToken.authorize, async (req, res) => {
    if (req.user) {
        const user = await User.getTags(req.user)
        console.log(user)
        res.status(200).json({
            message: "all tags are displayed",
            tags: user.tags
        })
    } else {
        res.status(400).json({
            message: 'Unable to add the tag'
        })
    }
})

router.delete('/tag', verifyToken.authorize, async (req, res) => {
    console.log(req.body, req.user)

    if (req.user) {
        const tagData = await User.removeTag(req.body, req.user)
        console.log(tagData)
        res.status(200).json({
            message: "tag is deleted from tag array",
        })
    } else {
        res.status(400).json({
            message: 'Unable to remove the tag'
        })
    }
})

router.delete('/tags', verifyToken.authorize, async (req, res) => {
    console.log(req.body)
    if (req.user) {
        const tagData = await User.removeAllTags(req.user)
        console.log(tagData)
        res.status(200).json({
            message: "All tags are deleted from tag array",
        })
    } else {
        res.status(400).json({
            message: 'Unable to delete the tags'
        })
    }
})
module.exports = router;