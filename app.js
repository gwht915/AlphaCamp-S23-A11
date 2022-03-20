// 載入 express 並建構應用程式伺服器
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars');
// 引用 body-parser
const bodyParser = require('body-parser')
// 載入 method-override
const methodOverride = require('method-override')
// 引用路由器
const routes = require('./routes')

// 將 request 導入路由器
require('./config/mongoose')

// 設定路由
//const Todo = require('./models/todo') // 載入 Todo model

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//app.use(methodOverride('_method'))
app.use(express.static('public'))

// 用 app.use 規定每一筆請求都需要透過 body - parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

app.use(routes)

const genStr = require('./routes/modules/gen_random_str')
const Url = require('./models/shortenUrl')

app.post('/', (req, res) => {
  const ranStr = genStr()
  console.log('ranStr: ', ranStr)
  sOriUrl = req.body.oriurl
  console.log('ori url: ', sOriUrl)
  const rec = { oriUrl: sOriUrl, shortUrl: ranStr }
  Url.findOne({ oriUrl: sOriUrl })
    .then(data => {
      if (!data) {
        //console.log('params: ', rec)
        return Url.create(rec)
          .then(() => { res.render('index', { genStr: ranStr, origin: req.headers.origin }) })
          .catch(error => console.log(error))
      }
      else {  
        //如果網址已經存在, 則只需更新隨機網址字串
        return Url.updateOne({ oriUrl: sOriUrl }, { shortUrl: ranStr })
          .then(() => { res.render('index', { genStr: ranStr, origin: req.headers.origin }) 
      })
          .catch(error => console.log(error))
      }
      // return Url.findOne({ oriUrl: sOriUrl })
      //   .then(urls => {
      //     urls.genStr = ranStr
      //     return urls.save()
      //   })
      //   .then(() => res.redirect('/'))
      //   .catch(error => console.log(error))
      //}
    })
})

app.post("/copy", (req, res) => {
     const URL = document.getElementById("shortURL")
     console.log('URL')
     navigator.clipboard.writeText(URL.innerText)
       .then(() => alert('copied'))
       .catch(error => console.log(error))
     
  })

app.get("/:shortUrl", (req, res) => {
  const params = req.params.shortUrl
  //console.log('params: ', params)

  Url.findOne({ shortUrl: params })
    .then(data => {
      //console.log('oriUrl: ', data.oriUrl)
      if (!data) {
        return res.render("errors", {
          errorURL: req.headers.host + "/" + params
        })
      }
      else {
        res.redirect(data.oriUrl)
      }
    })
    .catch(error => console.error(error))
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})