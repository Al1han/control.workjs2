const userEmail = document.getElementById('userEmail')
const userPassword = document.getElementById('userPassword')
let userData = JSON.parse(localStorage.getItem('users'))

function submit() {
    if(userData.some(item => item.email === userEmail.value && item.password === userPassword.value)){
        window.open('index.html', "_self")
    }else {
        userEmail.style.borderBottom = `1px solid red`
        userPassword.style.borderBottom = `1px solid red`
    }
}
