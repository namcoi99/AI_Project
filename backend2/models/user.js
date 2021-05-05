require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        unique: [true, "username already taken"],
        index: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        unique: [true, "email already registered"],
        index: true
    },
    tokens: [{
        token: {
            type: String
        }
    }]
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10)
    }
    next()
})

userSchema.methods.generateAccessToken = async function () {
    // Generate an auth token for the user
    const user = this
    const token = await jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET)
    // user.refreshTokens = user.refreshTokens.concat({ token: accessToken })
    // await user.save()
    user.tokens.push({ token: token })
    user.save()
    return token
}

// userSchema.methods.authenticateToken = function (req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.status(401).send()
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
// }

userSchema.statics.findByCredentials = async (username, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ username })
    if (!user) {
        throw new Error('User Not Found')
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error('Wrong Password')
    }
    return user
}

const User = mongoose.model('User', userSchema)

module.exports = User