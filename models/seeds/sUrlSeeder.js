//const mongoose = require('mongoose')
//const Url = require('../sUrl') // 載入 todo model
const db = require('../../config/mongoose')
const Url = require('../shortenUrl')

db.once('open', () => {
  console.log('mongodb connected(todoSeeder.js)!')
  
  Url.create({ oriUrl: 'abc',
               shortUrl: '123'
              })
  
  console.log('done')
})

