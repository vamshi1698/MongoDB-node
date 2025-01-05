require('dotenv').config()
const express = require('express')
const {router} = require('./routes/Routes')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected"))
.catch((e)=>console.error(e))

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server listening at port ${PORT}`) )

app.use('/',router)