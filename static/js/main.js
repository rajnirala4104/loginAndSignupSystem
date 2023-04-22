console.log("i'm checking");

//----------login System----------
let loginBtn = document.getElementById('userLoginBtn');
let userLoginEmailAndName = document.getElementById("userLoginEmail");
let userLoginPassword = document.getElementById('userLoginPassword');
let stayLoginCheckBox = document.getElementById('stayLoginCheckBox');

loginBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const gettingUserDetailsObj = JSON.parse(localStorage.getItem('userDetails'))
    if(userLoginEmailAndName.value == gettingUserDetailsObj.userEmail || userLoginEmailAndName.value == gettingUserDetailsObj.userName){
        console.log("This is user is already loged in our website...");
        console.log(`${userLoginEmailAndName.value} == ${gettingUserDetailsObj.userEmail}\n${userLoginEmailAndName.value}==${gettingUserDetailsObj.userName}`)
    }else{
        console.log("You can login...")
    }
})

//-----------regeisteration system ---------
let userName = document.getElementById('userName');
let userCreateAccountEmail = document.getElementById('userCreateAccountEmail')
let userCreateAccountPassword = document.getElementById('userCreateAccountPassword')
let saveUserDetailsCheck = document.getElementById('saveDetailCheck')
let userCreateAccountBtn = document.getElementById('userCreateAccountBtn');
userCreateAccountBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    // let arrOfUsers = []
    // let userDetailsObj = new Object();
    // if(localStorage.getItem('userDetails')){
    //     userDetailsObj["userName"] = userName.value
    //     userDetailsObj['userEmail'] = userCreateAccountEmail.value
    //     userDetailsObj['userPassword'] = userCreateAccountPassword.value
    //     arrOfUsers.push(userDetailsObj);
    // }else{
    //     userDetailsObj["userName"] = userName.value
    //     userDetailsObj['userEmail'] = userCreateAccountEmail.value
    //     userDetailsObj['userPassword'] = userCreateAccountPassword.value
    //     arrOfUsers.push(userDetailsObj);
    //     localStorage.setItem('userDetails', JSON.stringify(arrOfUsers))
    // }
})

const emailVerification = (emailInText)=>{
    //rajnirala910@gmail.com
    if(emailInText.isUpper()){
        if(emailInText.length >= 10){
            let symbolsArr = ["!","#","%","$","^","&","*","(",")","-","+","=", "/", ",","|","{","}","[","]", "`","~", "?", "<", ">", ":", ";"];
            for(EmailSymbol of symbolsArr){
                if(emailInText.includes(EmailSymbol)){
                    
                }
            }
        }
    }
}