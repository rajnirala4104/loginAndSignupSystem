const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(__dirname + '/static'));

app.get('/', (request, response)=>{
    response.status(200).render('index',  { name: "Raj Nirala" })
})
app.get('/prince', (request, response)=>{
    response.status(200).render('index',  { name: "Prince"})
})
app.get('/ankush', (request, response)=>{
    response.status(200).render('index',  { name: "Ankush"})
})
app.get('/ashish', (request, response)=>{
    response.status(200).render('index',  { name: "Achich"})
})



module.exports = app