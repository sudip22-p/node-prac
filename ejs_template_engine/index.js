const express = require('express')
var slug = require('slug')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    //value from db:
    let websiteName = 'SUD'
    let searchPlaceholder = 'Search Anything'
    res.sendFile('./templates/index.html', { root: __dirname })
})

app.get('/blogs/:slug', (req, res) => {
    //value from db:
    const  slug  = req.params.slug;
    let title1 = 'A Day Travel on Hill'
    let content1 = `Embark on a picturesque journey through the serene landscapes of "A Day Travel on Hill." This captivating blog invites readers to immerse themselves in the beauty of nature, as they traverse winding trails, breathe in the crisp mountain air, and witness breathtaking vistas. From the gentle rustle of leaves to the melodious chirping of birds, every moment on this hillside adventure is a symphony for the senses. Whether exploring hidden waterfalls, discovering quaint villages, or simply pausing to admire the majestic peaks, each step unveils a new chapter in the tale of tranquility and wonder. Join us as we escape the hustle and bustle of daily life and embrace the timeless allure of nature's embrace on "A Day Travel on Hill."`

    let title2 = 'Journey to the Summit: A Mountain Adventure';
    let content2 = `Embark on an exhilarating expedition to the summit in our latest blog post, "Journey to the Summit: A Mountain Adventure." Follow along as we ascend towering peaks, navigate rugged terrain, and conquer challenging trails. Feel the rush of adrenaline as we scale rocky cliffs and traverse narrow ridges, all while surrounded by awe-inspiring views of snow-capped peaks and alpine meadows. Experience the thrill of reaching new heights and the sense of accomplishment that comes with pushing beyond your limits. Whether you're an experienced mountaineer or a novice hiker, our blog promises to transport you to the heart of the mountains and ignite your passion for adventure. Join us as we embark on this epic journey and discover the true essence of mountain exploration.`;


    let searchPlaceholder = 'Search Anything'
    res.sendFile('./templates/blogs.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})