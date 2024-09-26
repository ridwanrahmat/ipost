const express = require('express')
const userRouter = require('./router/userRouter')

const app = express()

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})