const express =  require('express')
const path =  require('path')
require('./db/conn')
const User = require('./models/usermsg')
const hbs = require('hbs')
const { urlToHttpOptions } = require('url')
const { urlencoded } = require('express')

const app = express()
const port = process.env.PORT || 3000

// static public file loading
const staticPath =  path.join(__dirname, "../public")
const templatesPath =  path.join(__dirname, "../templates/views")
const partialPath =  path.join(__dirname, "../templates/partials")
// middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))
// -----
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath))
app.set("view engine", "hbs")
app.set("views", templatesPath)
hbs.registerPartials(partialPath)
// ---------=------------

// index page
app.get('/', (req, res) => {
    res.render("index")
})
// contact page
// app.get('/contact', (req, res) => {
//     res.render("contact")
// })

app.post('/contact', async(req,res) => {
    try {
        // res.send(req.body)
        const userData = new User(req.body)
        await userData.save()
        res.status(201).render('index')
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})