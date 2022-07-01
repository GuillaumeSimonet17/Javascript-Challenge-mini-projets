const form = document.querySelector(".form")
const formContainer = document.querySelector(".form-container")
const btnVar = document.querySelector("#btn-var")
const signupBtn = document.querySelector('#signup')
const loginBtn = document.querySelector('#login')

loginBtn.addEventListener('click', () => {
    form.style.transform = "translateX(150%)"
    btnVar.innerHTML = "Login"
    formContainer.innerHTML = 
    `
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Password">
    `
})
signupBtn.addEventListener('click', () => {
    form.style.transform = "translateX(0%)"
    btnVar.innerHTML = "Sign Up"
    formContainer.innerHTML = 
    `
    <input type="text" placeholder="First Name">
    <input type="text" placeholder="Last Name">
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Password">
    `
})