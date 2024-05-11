require('dotenv').config()
//console.log(process.env) // remove this after you've confirmed it is working
const express = require('express')
const app = express()
const port = 3000
const data ={
  kunal: "demo"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//hellowdasd
app.get('/twitter', (req, res) => {
    res.send('kunal8615')
  })

  app.get('/text', (req, res) => {
    res.send('<h1> bold test here</h1>')
  })

  app.get("/data",(req,res)=>{
    res.json(data)
  })
//ACCESS PRT BY ENV
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
