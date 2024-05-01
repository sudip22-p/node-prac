const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('get get yes working')
    res.send('Hello World from GET!')
})
app.post('/', (req, res) => {
    console.log('post post yes working')
  res.send('Hello World from POST !')
})
app.put('/', (req, res) => {
    console.log('PUT PUT yes working')
  res.send('Hello World from PUT !')
})
app.delete('/', (req, res) => {
    console.log('DELETE DELETE yes working')
  res.send('Hello World from DELETE !')
})


//file sending:do root specify/absolute path
app.get('/index', (req, res) => {
    console.log('index index yes working')
    // res.send('Hello World from Index!')//for sending text
    res.sendFile('templates/index.html',{root:__dirname})//for sending file
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})