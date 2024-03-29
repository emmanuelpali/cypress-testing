const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const loginRouter = require('./controllers/login')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('connecting to mongo ')

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)
app.use('/api/notes', notesRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}
console.log(process.env.NODE_ENV);
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app

var maxArea = function(height) {
  let p1 = 0, p2 = height.length - 1, maxArea = 0;
  while(p1 < pz){
      let currentHeight = Math.min(p1, p2);
      let width = p2 - p1;
      maxArea = Math.max(maxArea, (currentHeight * width))
      if(p1 <= p2){
          p1++
      }else {
          p2++
      }
  }
  return maxArea;
};