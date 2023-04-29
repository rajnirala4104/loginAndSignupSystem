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
    readDataFromDatabase(myClient).then(result => console.log(result), err=>err)
    response.status(200).render('index', {MyName: {age:39, hobbei: ["Guitar", "singing", "football","listing music", "traveling"]}})
})


app.post('/accountcreatedone', (request, response)=>{
    console.log(request.body)
    insertDataInDatabase(myClient, request.body).then(result => result, err => err)
    response.status(200).render('createAccount.hbs')
})




module.exports = app