const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { main, readDataFromDatabase, myClient, insertDataInDatabase, deleteTheDataOfTheDatabase, updateDataOfDatabase, deleteTheMultipalDataOfTheDatabase } = require('./database/db')

main()
const app = express()
app.use(express.urlencoded({ extended: false }));
// app.use(expressLayouts)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(__dirname + '/static'));


app.get('/', (request, response) => {
    readDataFromDatabase(myClient).then(result => console.log(result), err => err)
    response.status(200).render('index')
})



app.post('/accountcreatedone', (request, response) => {
    const data = request.body
    var _datafound = false;
    readDataFromDatabase(myClient).then(databaseData => {
        databaseData.forEach(singleData => {
            if (data.userName === singleData.userName && data.userEmail === singleData.userEmail) {
                _datafound = true;
            }
        })

        if (_datafound === false) {
            insertDataInDatabase(myClient, data).then(result => result, err => err)
            response.status(200).render('createAccount.hbs', {
                DublicateData_NOT_FoundError: true,
                message : "Data Inserted Successfully",
                UserDetails: {
                    userName: data.userName,    
                    userEmail: data.userEmail
                }
            })
        }else{
            response.status(200).render('index', { 
                DublicateDataFoundError: _datafound,
                message : "This data is already we have"
            })
        }
    })
})




module.exports = app;