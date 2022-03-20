const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sUrlSchema = new Schema({
  oriUrl: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  shortUrl: {
    type: String,
    required: true  // 預設完成狀態為 false
  }
})
module.exports = mongoose.model('ShortUrl', sUrlSchema)
