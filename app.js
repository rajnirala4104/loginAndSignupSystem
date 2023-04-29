const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const { main, readDataFromDatabase, myClient, insertDataInDatabase} = require('./database/db')

main()
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    readDataFromDatabase(myClient).then(result => result, err=>err)
    response.status(200).render('index')
})

app.post('/accountcreatedone', (request, response)=>{

    console.log(request.body)
    insertDataInDatabase(myClient, request.body).then(result => result, err => err)
    response.status(200).render('index')
})




module.exports = app