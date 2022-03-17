// 載入 express 並建構應用程式伺服器
const express = require('express')
//const mongoose = require('mongoose')
//const exphbs = require('express-handlebars');
// 引用 body-parser
const bodyParser = require('body-parser')
// 載入 method-override
//const methodOverride = require('method-override')
// 引用路由器
//const routes = require('./routes')

// 將 request 導入路由器
//require('./config/mongoose')

// 設定路由
//const Todo = require('./models/todo') // 載入 Todo model

const app = express()

//app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
//app.set('view engine', 'hbs')

//app.use(methodOverride('_method'))

//app.use(routes)

const PORT = 3000
app.listen(PORT, ()=>{
  console.log(`App is running on http://localhost:${PORT}`)
})