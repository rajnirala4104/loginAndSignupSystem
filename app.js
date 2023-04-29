const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { main, readDataFromDatabase, myClient, insertDataInDatabase} = require('./database/db')

main()
const app = express()
app.use(express.urlencoded({ extended: false }));
// app.use(expressLayouts)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(__dirname + '/static'));


app.get('/', (request, response) => {
    const data = readDataFromDatabase(myClient).then(result => result, err=>err)
    response.status(200).render('layout', {myData: data})
})


app.post('/accountcreatedone', (request, response)=>{
    console.log(request.body)
    insertDataInDatabase(myClient, request.body).then(result => result, err => err)
    response.status(200).render('createAccount', {userData: request.body})
})




module.exports = app