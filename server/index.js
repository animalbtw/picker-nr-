require('dotenv').config()
const path = require('path')
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const router = require('./routers/index')
const cors = require('cors')
const fileUpload = require('express-fileupload')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started at port: ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()