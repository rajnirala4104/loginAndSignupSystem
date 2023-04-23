console.log("i'm checking");

//----------login System----------
let loginBtn = document.getElementById('userLoginBtn');
let userLoginEmailAndName = document.getElementById("userLoginEmail");
let userLoginPassword = document.getElementById('userLoginPassword');
let stayLoginCheckBox = document.getElementById('stayLoginCheckBox');

var gettingUserDetailsObj = JSON.parse(localStorage.getItem('userDetails'))
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let loginAlertsDiv = document.getElementById('loginAlerts');
    if ((userLoginEmailAndName.value === gettingUserDetailsObj.userEmail || userLoginEmailAndName.value === gettingUserDetailsObj.userName) && (userLoginPassword.value === gettingUserDetailsObj.userPassword)) {
        console.log("you CAN Login");
        console.log(`${userLoginEmailAndName.value} == ${gettingUserDetailsObj.userEmail}\n${userLoginEmailAndName.value}==${gettingUserDetailsObj.userName}`)
        loginAlertsDiv.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Hurrey!!</strong> Login Successfully
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>`
    }
    else {
        console.error("You CAN'T login..., Incurrect User Name and Incurrect Password")
        loginAlertsDiv.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Oops!!</strong> Incurrect User Name or Incurrect Password
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>`
    }
})

//-----------regeisteration system ---------
let userName = document.getElementById('userName');
let userCreateAccountEmail = document.getElementById('userCreateAccountEmail')
let userCreateAccountPassword = document.getElementById('userCreateAccountPassword')
let saveUserDetailsCheck = document.getElementById('saveDetailCheck')
let userCreateAccountBtn = document.getElementById('userCreateAccountBtn');
userCreateAccountBtn.addEventListener('click', (e) => {
    console.log('Account Created...')
})

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


