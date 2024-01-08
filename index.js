const express = require('express')
const cors = require('cors')
const { StatusCodes } = require('http-status-codes')
require('dotenv').config()


const PORT = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

app.use(`/`, require('./route/appRoute'))

app.all('**', (req,res) => {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested path not found`})
})

app.listen(PORT, () => {
    console.log(`server started running @ http://localhost:${PORT}`)
})