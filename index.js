require('dotenv').config()
//console.log(process.env) // remove this after you've confirmed it is working
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('kunal8615')
  })

  app.get('/text', (req, res) => {
    res.send('<h1> bold test here</h1>')
  })
//ACCESS PRT BY ENV
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
