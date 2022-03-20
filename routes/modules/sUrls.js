const express = require('express')
const router = express.Router()
const Url = require('../../models/shortenUrl')
// router.get('/new', (req, res) => {
//   return res.render('new')
// })

router.post('/', (req, res) => {
  const params = req.body
  console.log('param:', params)
  return Url.create({ params })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router