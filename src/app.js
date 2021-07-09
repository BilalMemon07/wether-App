const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 4000



// public Static Path
const static_path = path.join(__dirname, "../public");
const tempelates_path = path.join(__dirname, "../tempelates/views");
const partials_path = path.join(__dirname, "../tempelates/partials");


app.set('view engine', 'hbs');
app.set('views', tempelates_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path)

// console.log(static_path);



// Routing 
app.get('', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/weather', (req, res) => {
    res.render('weather')
})
app.get('*', (req, res) => {
    res.render('404error', {
        errorMes: '404 Error Page Oops!'
    })
})


app.listen(port, () => {
    console.log(`server is running ${port}`)
})
