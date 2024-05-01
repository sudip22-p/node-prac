const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))//for creating public accessible files:http://localhost:3000/hello.txt

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
    res.send('about me!')
})

app.get('/contact', (req, res) => {
    res.send('contact me!')
})

app.get('/blogs', (req, res) => {
    res.send('My blogs!')
})

app.get('/skills', (req, res) => {
    res.send('My skills!')
})

app.get('/acheivements', (req, res) => {
    res.send('My acheivements!')
})
// ------------
//long format using raw node.js code
// -------------
//   app.get('/acheivements/acheivement-1', (req, res) => {
//     res.send('My acheivements-acheivement-1!')
//   })
//   app.get('/acheivements/acheivement-2', (req, res) => {
//     res.send('My acheivements-acheivement-2!')
//   })
// --------------
  //can be make super easy using express js using slug:
//   -------------
  app.get(`/acheivements/:slug`, (req, res) => {
        res.send(`My acheivements-${req.params.slug}!`)
      })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})