const express = require('express')
const path = require('path')
const { main, readDataFromDatabase, myClient, insertDataInDatabase, deleteTheDataOfTheDatabase, updateDataOfDatabase, deleteTheMultipalDataOfTheDatabase } = require('./database/db')

main()
const app = express()
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(__dirname + '/static'));


app.get('/', (request, response) => {
    // readDataFromDatabase(myClient).then(result => console.log(result), err => err)
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
        }, err => err)

        if (_datafound === false) {
            insertDataInDatabase(myClient, data).then(result => result, err => err)
            response.status(200).render('createAccount', {
                DublicateData_NOT_FoundError: true,
                message:"Account created successfuly, now you can login"
            })
        } else {
            response.status(200).render('index', {
                DublicateDataFoundError: _datafound,
                message: "This data is already we have"
            })
        }
    })
})

app.post('/logindone', (req, res) => {
    const userLoginInfo = req.body
    console.log(userLoginInfo)
    var _checkLoginInfo = false;
    var userDbData = [];
    readDataFromDatabase(myClient).then(userData => {
        userData.forEach(dbData => {
            // console.log(`-- ${dbData.userName}\n-- ${dbData.userEmail}`
            // console.log(`== ${userLoginInfo.loginUserName}\n== ${userLoginInfo.loginUserPassword}`)
            if (((dbData.userName === userLoginInfo.loginUserName) || (dbData.userEmail === userLoginInfo.loginUserName)) && (dbData.userPassword === userLoginInfo.loginUserPassword))  {
                _checkLoginInfo = true;
                userDbData.push(dbData) 
            }
        })
        if (_checkLoginInfo === true) {
            // console.log("You CAN login...")
            res.status(200).render('loginDone', { 
                checkLoginInfo: _checkLoginInfo,
                userInformation: userDbData
            });
        } else{
            // console.log("You CAN'T login..")
            res.status(200).render('index', { 
                checkLoginInfo: true,
                message: "We don't have those information in our database",
                userInformation: userLoginInfo
            });
        }
    })
})


module.exports = app;