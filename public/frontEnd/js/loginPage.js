let usarnameInput
let passwordInput
let inputs

function getUserInputs() {

    usarnameInput = document.getElementById("username").value
    passwordInput = document.getElementById("password").value

    return [usarnameInput, passwordInput]
}


function verifyLogin() {
    getUserInputs()
    inputs = getUserInputs()

    usarnameInput = inputs[0]
    passwordInput = inputs[1]


    //direct to the main page
    if (usarnameInput === "admin" && passwordInput === "pass") {
        goMainPage()

    }
}