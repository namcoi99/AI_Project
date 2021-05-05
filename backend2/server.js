require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')
app
    .use('/users', usersRouter)
    // .use('/auth',authRouter)

// const users = []
// const posts = []
// const saltRounds = 10

// app.get('/users', (req, res) => {
//     res.json(users)
// })

// app.post('/users', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
//         const user = { name: req.body.name, password: hashedPassword }
//         users.push(user)
//         res.sendStatus(201)
//     } catch {
//         res.sendStatus(500)
//     }
// })

// app.post('/posts', (req, res) => {
//     const post = { name: req.body.name, title: req.body.title }
//     posts.push(post)
// })

// app.get('/posts', authenticateToken, (req, res) => {
//     res.json(posts.filter(post => post.name == req.user.name))
// })

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.status(401).send()
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
// }

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})