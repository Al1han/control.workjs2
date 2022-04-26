const userName = document.getElementById('usernameId')
const eMail = document.getElementById('emailId')
const passWord = document.getElementById('passwordId')
const confirmPassword = document.getElementById('confirmPasswordId')
let state = []

window.addEventListener('load', () => {
    if(!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(state))
        window.location.reload()
    }
})


function saveAcc() {
    if (userName.value.length == '') {
        userName.style.border = `1px solid red`

    } else if (eMail.value.length == '') {
        eMail.style.border = `1px solid red`
    
    } else if (passWord.value.length == '') {
        passWord.style.border = `1px solid red`
    
    } else if (passWord.value.length < 8) {
        document.getElementById('passworD').innerHTML = `<span> Min of 8</span>`
        passWord.style.border='1px solid red'
    
    } else if (passWord.value != confirmPassword.value ) {
        confirmPassword.style.border=`1px solid red`

    }else if(!eMail.value.includes('@')){ 
        document.getElementById('emaiL').innerHTML = `<span>@ is not defined</span>`
    }else if(!userName.value.length == '' && !eMail.value.length == '' && !passWord.value.length == '' &&!confirmPassword.value.length == '' && passWord.value == confirmPassword.value && passWord.value.length >= 8 &&eMail.value.includes('@')){
        let getted = JSON.parse(localStorage.getItem('users'))
        getted.push({ 
            username: userName.value, 
            email: eMail.value, 
            password: passWord.value
        }) 
        localStorage.setItem('users', JSON.stringify(getted))
        console.log(getted)
    } 
}


