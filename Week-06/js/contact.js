//validate if one position of the string match with a letter and return a boolean
function haveLetters(str){
    var letter = "acbdefghijklmnopqrstuvwxyz";
    var cont = 0;

    for (var j = 0; j < letter.length; j++) {
        if(str === letter.substring(j, j+1)){
        cont++;
        break;
        }
    }
  return cont == str.length;
}

//validate if one position of the string match with a number and return a boolean
function haveNumbers(str){
    var letter = "0123456789";
    var cont = 0;

    for (var j = 0; j < letter.length; j++) {
        if(str === letter.substring(j, j+1)){
            cont++;
            break;
        }
    }
    return cont == str.length;
}

//validate if the string contain only letters and return a boolean
function validateL(str){
    var aux = str.toLowerCase();
    var cont = 0;

    for (var i = 0; i < aux.length; i++) {
        if(haveLetters(aux.substring(i, i+1))){
            cont++;
        }
    }
    return cont == aux.length;
}

//validate if the string contain numbers and letters, and return a boolean
function haveAlpha(str){
    var aux = str.toLowerCase();
    var contL = 0, contN = 0;

    for (var i = 0; i < aux.length; i++) {
        if(haveLetters(aux.substring(i, i+1)) || aux.substring(i, i+1) == " "){
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

//Name and surname validations using the same function validateNameOrSurname
var inputName = document.getElementById("name-index");
var msj = document.getElementById("error");
inputName.addEventListener("blur", validateName);
inputName.addEventListener("focus", function(){focus(inputName, msj)});

var inputSurname = document.getElementById("surname-index");
var msj2 = document.getElementById("error2");
inputSurname.addEventListener("blur", validateSurname);
inputSurname.addEventListener("focus", function(){focus(inputSurname, msj2)});

function validateName(){
    validateNameOrSurname(inputName, msj)
}

function validateSurname(){
    validateNameOrSurname(inputSurname, msj2)
}

function validateNameOrSurname(input, msjP){
    var valorInput = input.value.trim();
    var aux = msjP;
    var isValid = true;

    if (!validateL(valorInput) || valorInput.length < 3) {
      isValid = false;
    }
    if(valorInput == ""){
      input.classList.add("red");
      aux.textContent = "Field required";
    }else if (isValid){
      aux.textContent = "";
      input.classList.remove("red");
    } else {
      input.classList.add("red");
      aux.textContent = "Must contain only letters and 3 or more characteres";
    }
  }

//Email validation
var inputEmail = document.getElementById("email-index");
var msj3 = document.getElementById("error3");

inputEmail.addEventListener("blur", validateEmail);
inputEmail.addEventListener("focus", function(){focus(inputEmail, msj3)});

function validateEmail(){
    var valorInput = inputEmail.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var isValid = true;

    if(!emailExpression.test(valorInput)){
        isValid = false;
    }
    if(valorInput == ""){
        inputEmail.classList.add("red");
        msj3.textContent = "Field required";
    }else if (isValid){
        msj3.textContent = "";
        inputEmail.classList.remove("red");
    } else {
        inputEmail.classList.add("red");
        msj3.textContent = "Invalid email format";
    }
}

//Reason validation
var inputReason = document.getElementById("select");

inputReason.addEventListener("blur", validateReason);
inputReason.addEventListener("focus", function(){inputReason.classList.remove("red");});

function validateReason(){
    var valorInput = inputReason.value;
    var isValid = true;

    if(valorInput == "Choose contact reason"){
        inputReason.classList.add("red");
    }else if (isValid){
        inputReason.classList.remove("red");
    }
}

//Textarea validation
var inputArea = document.getElementById("message");
var msj5 = document.getElementById("error5");

inputArea.addEventListener("blur", validateArea);
inputArea.addEventListener("focus", function(){focus(inputArea, msj5)});

function validateArea(){
    var valorInput = inputArea.value;
    var isValid = true;

    if(((!haveAlpha(valorInput)) && (!validateL(valorInput))) || (valorInput.length < 3)){
        isValid = false;
    }
    if(valorInput == ""){
        inputArea.classList.add("red");
        msj5.textContent = "Field required";
    }else if (isValid){
        msj5.textContent = "";
        inputArea.classList.remove("red");
    } else {
        inputArea.classList.add("red");
        msj5.textContent = "Must contain at least 3 or more characters";
    }
}

var submit = document.getElementById("send");
var submit2 = document.getElementById("send2");
submit.addEventListener("click", send);
submit2.addEventListener("click", send);

function send(){
    if(inputName.classList.contains("red") || inputSurname.classList.contains("red")
    || inputEmail.classList.contains("red") ||inputReason.value == "Choose contact reason"
    || inputArea.classList.contains("red")){
        alert("One of the inputs are incorrect, please try again");
    }else{
        alert("Name: "+inputName.value+"\nLast name: "+inputSurname.value+
        "\nEmail: "+inputEmail.value+"\nContact reason: "+inputReason.value);
    }
}