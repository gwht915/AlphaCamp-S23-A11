const mongoose = require('mongoose')

// 如果在 Heroku 環境則使用 process.env.MONGODB_URI
// 否則為本地環境，使用 mongodb://localhost/todo-list
const MONGODB_URI = 'mongodb://localhost/url-short'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error(mongoose.js)!')
})

db.once('open', () => {
  console.log('mongodb connected(mongoose.js)!')
})

module.exports = db