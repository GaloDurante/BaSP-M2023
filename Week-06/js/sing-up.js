//validate if the string contain only letters and return a boolean
function haveLetters(str){
  var aux = str.toLowerCase();
  var letter = "acbdefghijklmnopqrstuvwxyz";
  var cont = 0;

  for (var i = 0; i < aux.length; i++) {
      for (var j = 0; j < letter.length; j++) {
          if(aux.substring(i, i+1) === letter.substring(j, j+1)){
            cont++;
            break;
          }
      }
  }
  return cont == aux.length;
}

//validate if the string contain only numbers and return a boolean
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

//name validation
var inputName = document.getElementById("name-sign-up");
var msj = document.getElementById("error");

inputName.addEventListener("blur", validateName);
inputName.addEventListener("focus", function(){
    inputName.classList.remove("red");
    msj.textContent = "";
});

function validateName(){
  var valorInput = inputName.value.trim();
  var isValid = true;

  if (!haveLetters(valorInput) || valorInput.length < 3) {
    isValid = false;
  }
  if(valorInput == ""){
    inputName.classList.add("red");
    msj.textContent = "Fill this input";
  }else if (isValid){
    msj.textContent = "";
    inputName.classList.remove("red");
  } else {
    inputName.classList.add("red");
    msj.textContent = "Must contain only letters and 3 or more characteres";
  }
}

//surname validation
var inputSurname = document.getElementById("surname-sign-up");
var msj2 = document.getElementById("error2");

inputSurname.addEventListener("blur", validateSurname);
inputSurname.addEventListener("focus", function(){
    inputSurname.classList.remove("red");
    msj2.textContent = "";
});

function validateSurname(){
    var valorInput = inputSurname.value.trim();
    var isValid = true;

    if (!haveLetters(valorInput) || valorInput.length < 3) {
      isValid = false;
    }
    if(valorInput == ""){
        inputSurname.classList.add("red");
        msj2.textContent = "Fill this input";
    }else if (isValid){
        msj2.textContent = "";
        inputSurname.classList.remove("red");
    } else {
      inputSurname.classList.add("red");
      msj2.textContent = "Must contain only letters and 3 or more characteres";
    }
}

//DNI validation
var inputDni = document.getElementById("dni");
var msj3 = document.getElementById("error3");

inputDni.addEventListener("blur", validateDni);
inputDni.addEventListener("focus", function(){
    inputDni.classList.remove("red");
    msj3.textContent = "";
});

function validateDni(){
    var valorInput = inputDni.value;
    var isValid = true;

    if((isNaN(valorInput)) || (valorInput.length < 7)){
        isValid = false;
    }
    if(valorInput == ""){
        inputDni.classList.add("red");
        msj3.textContent = "Fill this input";
    }else if (isValid){
        msj3.textContent = "";
        inputDni.classList.remove("red");
    } else {
        inputDni.classList.add("red");
        msj3.textContent = "Must contain only numbers and 7 or more characteres";
    }
}

//Phone validation
var inputPhone = document.getElementById("phone");
var msj4 = document.getElementById("error4");

inputPhone.addEventListener("blur", validatePhone);
inputPhone.addEventListener("focus", function(){
    inputPhone.classList.remove("red");
    msj4.textContent = "";
});

function validatePhone(){
    var valorInput = inputPhone.value;
    var isValid = true;

    if((isNaN(valorInput)) || (valorInput.length != 10)){
        isValid = false;
    }
    if(valorInput == ""){
        inputPhone.classList.add("red");
        msj4.textContent = "Fill this input";
    }else if (isValid){
        msj4.textContent = "";
        inputPhone.classList.remove("red");
    } else {
        inputPhone.classList.add("red");
        msj4.textContent = "Must contain only numbers and 10 characteres";
    }
}

//Address validation
var inputAddress = document.getElementById("address");
var msj5 = document.getElementById("error5");

inputAddress.addEventListener("blur", validateAddress);
inputAddress.addEventListener("focus", function(){
    inputAddress.classList.remove("red");
    msj5.textContent = "";
});

function validateAddress(){
    var valorInput = inputAddress.value;
    var isValid = true;

    if(!haveAlpha(valorInput) || (valorInput.length < 5) || (valorInput.indexOf(" ") < 3)){
        isValid = false;
    }
    if(valorInput == ""){
        inputAddress.classList.add("red");
        msj5.textContent = "Fill this input";
    }else if (isValid){
        msj5.textContent = "";
        inputAddress.classList.remove("red");
    } else {
        inputAddress.classList.add("red");
        msj5.textContent = "Must contain at least one letter, one number, one space and 5 or more characters";
    }
}

//Location validation
var inputLocation = document.getElementById("location");
var msj6 = document.getElementById("error6");

inputLocation.addEventListener("blur", validateLocation);
inputLocation.addEventListener("focus", function(){
    inputLocation.classList.remove("red");
    msj6.textContent = "";
});

function validateLocation(){
    var valorInput = inputLocation.value;
    var isValid = true;

    if(!haveAlpha(valorInput) || (valorInput.length < 3)){
        isValid = false;
    }
    if(valorInput == ""){
        inputLocation.classList.add("red");
        msj6.textContent = "Fill this input";
    }else if (isValid){
        msj6.textContent = "";
        inputLocation.classList.remove("red");
    } else {
        inputLocation.classList.add("red");
        msj6.textContent = "Must contain at least one letter, one number and 3 or more characters";
    }
}

//Postal Code validation
var inputPostal = document.getElementById("postal-code");
var msj7 = document.getElementById("error7");

inputPostal.addEventListener("blur", validatePostal);
inputPostal.addEventListener("focus", function(){
    inputPostal.classList.remove("red");
    msj7.textContent = "";
});

function validatePostal(){
    var valorInput = inputPostal.value;
    var isValid = true;

    if((isNaN(valorInput)) || (valorInput.length < 4 || valorInput.length > 5)){
        isValid = false;
    }
    if(valorInput == ""){
        inputPostal.classList.add("red");
        msj7.textContent = "Fill this input";
    }else if (isValid){
        msj7.textContent = "";
        inputPostal.classList.remove("red");
    } else {
        inputPostal.classList.add("red");
        msj7.textContent = "Must contain at least one letter, one number and 3 or more characters";
    }
}

//Email validation
var inputEmail = document.getElementById("email-sign-up");
var msj8 = document.getElementById("error8");

inputEmail.addEventListener("blur", validateEmail);
inputEmail.addEventListener("focus", function(){
    inputEmail.classList.remove("red");
    msj8.textContent = "";
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
        msj8.textContent = "Fill this input";
    }else if (isValid){
        msj8.textContent = "";
        inputEmail.classList.remove("red");
    } else {
        inputEmail.classList.add("red");
        msj8.textContent = "Invalid email format";
    }
}

//Password validation
var inputPass = document.getElementById("password");
var msj9 = document.getElementById("error9");

inputPass.addEventListener("blur", validatePass);
inputPass.addEventListener("focus", function(){
    inputPass.classList.remove("red");
    msj9.textContent = "";
});

function validatePass(){
    var valorInput = inputPass.value;
    var isValid = true;

    if(!haveAlpha(valorInput) || (valorInput.length < 8)){
        isValid = false;
    }
    if(valorInput == ""){
        inputPass.classList.add("red");
        msj9.textContent = "Fill this input";
    }else if (isValid){
        msj9.textContent = "";
        inputPass.classList.remove("red");
    } else {
        inputPass.classList.add("red");
        msj9.textContent = "Must contain at least one letter, one number and 8 or more characters";
    }
}

//Password-repeat validation
var inputPassR = document.getElementById("password-repeat");
var msj10 = document.getElementById("error10");

inputPassR.addEventListener("blur", validatePassR);
inputPassR.addEventListener("focus", function(){
    inputPassR.classList.remove("red");
    msj10.textContent = "";
});

function validatePassR(){
    var valorInput = inputPassR.value;
    var isValid = true;

    if(valorInput != inputPass.value){
        isValid = false;
    }
    if(valorInput == ""){
        inputPassR.classList.add("red");
        msj10.textContent = "Fill this input";
    }else if (isValid){
        msj10.textContent = "";
        inputPassR.classList.remove("red");
    } else {
        inputPassR.classList.add("red");
        msj10.textContent = "The passwords don't match";
    }
}

var register = document.getElementById("btn");
register.addEventListener("click", send)

function send(){
    if(inputName.classList.contains("red") || inputSurname.classList.contains("red")
    || inputDni.classList.contains("red") || inputPhone.classList.contains("red")
    || inputAddress.classList.contains("red") || inputLocation.classList.contains("red")
    || inputPostal.classList.contains("red") || inputEmail.classList.contains("red")
    || inputPass.classList.contains("red") || inputPassR.classList.contains("red")){
        alert("One of the inputs are incorrect, please try again");
    }else{
        alert("Name: "+inputName.value+"\nSurname: "+inputSurname.value+"\nDNI: "+inputDni.value
        +"\nPhone: "+inputPhone.value+"\nAddress: "+inputAddress.value+"\nLocation: "+inputLocation.value
        +"\nPostal Code: "+inputPostal.value+"\nEmail: "+inputEmail.value);
    }
}
