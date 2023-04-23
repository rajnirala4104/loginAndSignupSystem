const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const { main, readDataFromDatabase, myClient } = require('./database/db')

const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(__dirname + '/static'));

main()
app.get('/', (request, response) => {
    readDataFromDatabase(myClient).then((data)=>{
        return data
    }, (err)=>{
        console.log("Oops!! i'm facing problem to fetch the data from database", err)
    })
    response.status(200).render('index', { something: "raj nirala"})
})





module.exports = app