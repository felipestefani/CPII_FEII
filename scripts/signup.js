let buttonElement = document.querySelector('button')
let nameInput = document.getElementById('name')
let surnameInput = document.getElementById('surname')
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let confirmPassword = document.getElementById('password')
let corFundoValidado = "rgb(223, 237, 236)" //'#dfedec'

//-----------------------Name validations--------------------------
nameInput.addEventListener('keyup', event =>{
    let nameInfo = document.getElementById('name-info')
    nameInput.value.length < 2 ? nameInfo.style.visibility = 'visible' : nameInfo.style.visibility = 'hidden'
})

//-----------------------Surname validations--------------------------
surnameInput.addEventListener('keyup', event =>{
    let surnameInfo = document.getElementById('surname-info')
    surnameInput.value.length < 2 ? surnameInfo.style.visibility = 'visible' : surnameInfo.style.visibility = 'hidden'
})

//-----------------------E-mail validations--------------------------
emailInput.addEventListener('keyup', event => {
    let infoEmail = document.getElementById('email-info')
    if(!emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        if(emailInput.value == ``){
            infoEmail.style.visibility = 'visible'
            infoEmail.innerText = `Needed field`
        }else{
            infoEmail.innerText = `Insert a valid e-mail`
            infoEmail.style.visibility = 'visible'
        }
        if(event.key){
            emailInput.style.boxShadow = '0 0 0 2px #CAEDEB'
            emailInput.style.backgroundColor = '#fff'
        }
    }else{
        emailInput.style.boxShadow = 'none'
        emailInput.style.backgroundColor = corFundoValidado
        infoEmail.style.visibility = 'hidden'
    }
    buttonValidation(emailInput.style.backgroundColor, passwordInput.style.backgroundColor)
})

emailInput.addEventListener('blur', () => {
    let infoEmail = document.getElementById('email-info')
    if(!emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        infoEmail.style.visibility = 'visible'
        emailInput.style.boxShadow = '0 0 0 2px #EB5E5E'
        emailInput.style.backgroundColor = 'hsl(0, 49%, 90%)'
    }else{
        infoEmail.style.visibility = 'hidden'
        emailInput.style.boxShadow = 'none'
    }
})

//-----------------------Password validations--------------------------
passwordInput.addEventListener('keyup', event =>{
    let passwordInfo = document.getElementById('password-info')
    if(passwordInput.value.length < 8){
        if(passwordInput.value.length == ``){
            passwordInfo.innerText = `Needed field`
            passwordInfo.style.visibility = 'visible'
        }else if(passwordInput.value.length >= 1 && passwordInput.value.length < 8){    
            passwordInfo.innerText = `Password must be at least 8 characters`
            passwordInfo.style.visibility = 'visible'
        }
        if(event.key){
            passwordInput.style.boxShadow = '0 0 0 2px #CAEDEB'
            passwordInput.style.backgroundColor = '#fff'   
        }
    }else{
        passwordInput.style.boxShadow = 'none'
        passwordInput.style.backgroundColor = corFundoValidado
        passwordInfo.style.visibility = 'hidden'
    }
    buttonValidation(emailInput.style.backgroundColor, passwordInput.style.backgroundColor)
})

passwordInput.addEventListener('blur', () => { 
    let passwordInfo = document.getElementById('password-info')
    if(passwordInput.value.length < 8){
        passwordInfo.style.visibility = 'visible'
        passwordInput.style.boxShadow = '0 0 0 2px #EB5E5E'
        passwordInput.style.backgroundColor = 'hsl(0, 49%, 90%)'
    }else{
        passwordInfo.style.visibility = 'hidden'
        passwordInput.style.boxShadow = 'none'
    }
})

//------------------------Button validations----------------------------
function buttonValidation(emailStyle, passwordStyle){
    if(emailStyle == corFundoValidado && passwordStyle == corFundoValidado){
        buttonElement.removeAttribute('disabled')
        buttonElement.style.cursor = 'pointer'
        buttonElement.style.backgroundColor = '#fbb232'
    }else{
        buttonElement.setAttribute('disabled', true)
        buttonElement.style.cursor = 'not-allowed'
        buttonElement.style.backgroundColor = 'rgb(251, 217, 159)'
    }
}

//------------------------Button action----------------------------
buttonElement.addEventListener('click', event => {
    console.log(removeBlankSpace(emailInput.value))
    console.log(removeBlankSpace(passwordInput.value))
    event.preventDefault()
})

//------------------------function to remove blank spaces from any border----------------------------
function removeBlankSpace(text){
    return text.trim()
}