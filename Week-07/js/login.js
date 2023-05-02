//validate if one position of the string match with a letter and return a boolean
function haveLetters(str){
    var strM = str.toLowerCase();
    var letter = "acbdefghijklmnopqrstuvwxyz";
    var cont = 0;

    for (var i = 0; i < strM.length; i++) {
        for (var j = 0; j < letter.length; j++) {
            if(strM.substring(i, i+1) === letter.substring(j, j+1)){
                cont++;
                break;
            }
        }
    }
    return cont == strM.length;
}

//validate if one position of the string match with a number and return a boolean
function haveNumbers(str){
    var letter = "0123456789";
    var cont = 0;

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < letter.length; j++) {
            if(str.substring(i, i+1) === letter.substring(j, j+1)){
                cont++;
                break;
            }
        }
    }
    return cont == str.length;
}

//validate if the string contain numbers and letters, and return a boolean
function haveAlpha(str){
    var aux = str.toLowerCase();
    var contL = 0, contN = 0;

    for (var i = 0; i < aux.length; i++) {
        if(haveLetters(aux.substring(i, i+1))){
            contL++;
        }else if(haveNumbers(aux.substring(i, i+1))){
            contN++;
        }
    }
    if(contL > 0 && contN > 0){
        return (contN + contL) == aux.length;
    }else{
        return false;
    }
}

//implements focus on any input
function focus(input, msjP){
    input.classList.remove("red");
    msjP.textContent = "";
}

//Email validation
var inputEmail = document.getElementById("email-sign-in");
var msj = document.getElementById("error");

inputEmail.addEventListener("blur", validateEmail);
inputEmail.addEventListener("focus", function(){focus(inputEmail, msj)});

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
inputPass.addEventListener("focus", function(){focus(inputPass, msj2)});

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
        var url = "https://api-rest-server.vercel.app/login?email="+inputEmail.value+"&password="+inputPass.value;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if(data.success){
                    alert(data.msg);
                }else{
                    console.log(data)
                    if(!data.msg){
                        var aux = "Error:\n";
                        data.errors.forEach( function(error){
                            aux += error.msg+"\n";
                        });
                        alert(aux);
                    }else{
                        alert(data.msg);
                    }
                }
            })
            .catch(function (error) {
                alert("Error: "+error);
            });
    }
}