console.log("i'm checking");

//---------------login System ----------
let loginBtn = document.getElementById('userLoginBtn');
let userLoginEmailAndName = document.getElementById("userLoginEmail");
let userLoginPassword = document.getElementById('userLoginPassword');
let stayLoginCheckBox = document.getElementById('stayLoginCheckBox');

//Event listener....
// mydb.main(

//-----------regeisteration system ---------
let userName = document.getElementById('userName');
let userCreateAccountEmail = document.getElementById('userCreateAccountEmail')
let userCreateAccountPassword = document.getElementById('userCreateAccountPassword')
let saveUserDetailsCheck = document.getElementById('saveDetailCheck')
let userCreateAccountBtn = document.getElementById('userCreateAccountBtn')

//Event listener..



const emailVerification = (emailInText) => {
    //rajnirala910@gmail.com
    if (!(emailInText.isUpper())) {
        if (emailInText.length >= 10) {
            let symbolsArr = ["!", "#", "%", "$", "^", "&", "*", "(", ")", "-", "+", "=", "/", ",", "|", "{", "}", "[", "]", "`", "~", "?", "<", ">", ":", ";"];
            const symbolIsAvailible = symbolsArr.filter(sm => emailInText.includes(sm))
            if (symbolIsAvailible) {
                console.log(`symbols are not aloud`)
            }
        } else {
            console.log(`Email is too short, try again`);
        }
    } else {
        console.log(`Capital char is note aloud.. try again`);
    }
}

