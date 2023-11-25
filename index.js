
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('user logged-in')
})
app.get('/signup', (req, res) => {
    res.send('user signed-up')
})
app.get('/products', (req, res) => {
    res.send('user product')
})
app.get('/pic', (req, res) => {
    res.send('user pic')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})