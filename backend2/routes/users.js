const express = require('express')
const router = express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')
//Getting all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Getting user by id
router.get('/:id', getUser, (req, res) => {
    res.json(res.user)
})

router.post('/profile', auth, async (req, res) => {
    // View logged in user profile
    res.json(req.user)
})

//Create an user
router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Update an user
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.username != null) {
        res.user.username = req.body.username
    }
    if (req.body.password != null) {
        res.user.password = req.body.password
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Delete an user
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: "Deleted user" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Login
router.post('/login', async (req, res) => {
    //Login a registered user
    try {
        const { username, password } = req.body
        const user = await User.findByCredentials(username, password)
        const token = await user.generateAccessToken()
        res.json({ user, token })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

    // try {
    //     const { username, password } = req.body
    //     const user = await User.findOne({ username })
    //     if (!user) {
    //         return res.status(404).json({ message: "User Not Found" })
    //     }
    //     const isPasswordMatch = await bcrypt.compare(password, user.password)
    //     if (!isPasswordMatch) {
    //         throw new Error({ error: 'Invalid login credentials' })
    //     }
    //     const token = await user.generateAccessToken()
    //     res.json({ user, token })
    // } catch (err) {
    //     res.status(400).json({ message: err.message })
    // }
})

router.post('/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        res.status(500).send(error)
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) res.status(404).json({ message: "User Not Found" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}

module.exports = router