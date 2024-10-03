var express = require('express')
var router = express.Router()
const { getAllNearlyGoodMessages } = require('../goodmessage')
const { getAllnews } = require('../news')
const { getData } = require('../about')
const { getBannerData } = require('../banner')

/* GET home page. */
router.get('/', async function (req, res, next) {

  const list = await getAllNearlyGoodMessages()

  const news = await getAllnews()
  console.log('news',news)
  const about = await getData()
  console.log('about',about)
  const banner = await getBannerData()
  console.log('banner',about)
  res.render('index', { list:list||[], news:news||[], about:about||[], banner:banner||[] })
})

module.exports = router
