//Alphanumeric validation
function haveAlpha(str){
    var aux = str.toLowerCase();
    var alpha = "acbdefghijklmnopqrstuvwxyz";
    var contL = 0, contN = 0;

    for (var i = 0; i < aux.length; i++) {
        for (var j = 0; j < alpha.length; j++) {
            if(aux.substring(i, i+1) === alpha.substring(j, j+1)){
                contL++;
                break;
            }else if(!isNaN(aux.substring(i, i+1))){
                contN++;
                break;
            }
        }
    }
    if(contL > 0 && contN > 0){
        return (contN + contL) == aux.length;
    }else{
        return false;
    }
}

//Email validation
var inputEmail = document.getElementById("email-sign-in");
var msj = document.getElementById("error");

inputEmail.addEventListener("blur", validateEmail);
inputEmail.addEventListener("focus", function(){
    inputEmail.classList.remove("red");
    msj.textContent = "";
});

function validateEmail(){
    var valorInput = inputEmail.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var isValid = true;

    if(!emailExpression.test(valorInput)){
        isValid = false;
    }
    if(valorInput == ""){
        inputEmail.classList.add("red");
        msj.textContent = "Field required";
    }else if (isValid){
        msj.textContent = "";
        inputEmail.classList.remove("red");
    } else {
        inputEmail.classList.add("red");
        msj.textContent = "Invalid email format";
    }
}

//Password validation
var inputPass = document.getElementById("password-sign-in");
var msj2 = document.getElementById("error2");

inputPass.addEventListener("blur", validatePass);
inputPass.addEventListener("focus", function(){
    inputPass.classList.remove("red");
    msj2.textContent = "";
});

function validatePass(){
    var valorInput = inputPass.value;
    var isValid = true;

    if(!haveAlpha(valorInput) || (valorInput.length < 8)){
        isValid = false;
    }
    if(valorInput == ""){
        inputPass.classList.add("red");
        msj2.textContent = "Field required";
    }else if (isValid){
        msj2.textContent = "";
        inputPass.classList.remove("red");
    } else {
        inputPass.classList.add("red");
        msj2.textContent = "Must contain at least one letter, one number and 8 or more characters";
    }
}

var register = document.getElementById("btn");
register.addEventListener("click", send)

function send(){
    if(inputEmail.classList.contains("red") || inputPass.classList.contains("red")){
        alert("One of the inputs are incorrect, please try again");
    }else{
        alert("Email: "+inputEmail.value+"\nPassword: "+inputPass.value);
    }
}