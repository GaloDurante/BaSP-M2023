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

//validate if the string contain numbers, letters, and return a boolean
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
    return (contN + contL) == aux.length;
}

//validate if the string contain numbers and letters, and return a boolean
function haveAlphaP(str){
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
var inputName = document.getElementById("name-sign-up");
var msj = document.getElementById("error");
inputName.addEventListener("blur", validateName);
inputName.addEventListener("focus", function(){focus(inputName, msj)});

var inputSurname = document.getElementById("surname-sign-up");
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

    if (!haveLetters(valorInput) || valorInput.length < 3) {
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

//DNI validation
var inputDni = document.getElementById("dni");
var msj3 = document.getElementById("error3");

inputDni.addEventListener("blur", validateDni);
inputDni.addEventListener("focus", function(){focus(inputDni, msj3)});

function validateDni(){
    var valorInput = inputDni.value;
    var isValid = true;

    if((!haveNumbers(valorInput)) || (valorInput.length < 7)){
        isValid = false;
    }
    if(valorInput == ""){
        inputDni.classList.add("red");
        msj3.textContent = "Field required";
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
inputPhone.addEventListener("focus", function(){focus(inputPhone, msj4)});

function validatePhone(){
    var valorInput = inputPhone.value;
    var isValid = true;

    if((!haveNumbers(valorInput)) || (valorInput.length != 10)){
        isValid = false;
    }
    if(valorInput == ""){
        inputPhone.classList.add("red");
        msj4.textContent = "Field required";
    }else if (isValid){
        msj4.textContent = "";
        inputPhone.classList.remove("red");
    } else {
        inputPhone.classList.add("red");
        msj4.textContent = "Must contain only numbers and 10 characteres";
    }
}

//Date validation
var inputDate = document.getElementById("date-of-birth");
var msjD = document.getElementById("errorD");
var newDateF = "";
inputDate.addEventListener("blur", validateDate);
inputDate.addEventListener("focus", function(){focus(inputDate, msjD)});

function validateDate(){
    var valorInput = inputDate.value;
    var isValid = true;

    if(valorInput == ""){
        isValid = false;
        inputDate.classList.add("red");
        msjD.textContent = "Field required";
    }else if(valorInput.substring(0,4) < 1930 || valorInput.substring(0,4) > 2010){
        isValid = false;
        inputDate.classList.add("red");
        msjD.textContent = "Invalid date, try again";
    }else if (isValid){
        newDateF = changeDateFormat(valorInput);
        msjD.textContent = "";
        inputDate.classList.remove("red");
    } else {
        inputDate.classList.add("red");
        msjD.textContent = "Invalid date, try again.";
    }
}

function changeDateFormat(val){
    newStr = val.substring(5,7)+"/"+val.substring(8,10)+"/"+val.substring(0,4);
    return newStr;
}

//Address validation
var inputAddress = document.getElementById("address");
var msj5 = document.getElementById("error5");

inputAddress.addEventListener("blur", validateAddress);
inputAddress.addEventListener("focus", function(){focus(inputAddress, msj5)});

function validateAddress(){
    var valorInput = inputAddress.value;
    var isValid = true;

    if(!haveAlphaP(valorInput) || (valorInput.length < 5) || valorInput.indexOf(" ") < 3){
        isValid = false;
    }
    if(valorInput == ""){
        inputAddress.classList.add("red");
        msj5.textContent = "Field required";
    }else if (isValid){
        msj5.textContent = "";
        inputAddress.classList.remove("red");
    } else {
        inputAddress.classList.add("red");
        msj5.textContent = "Must contain 5 or more characters and a valid address format";
    }
}

//Location validation
var inputLocation = document.getElementById("location");
var msj6 = document.getElementById("error6");

inputLocation.addEventListener("blur", validateLocation);
inputLocation.addEventListener("focus", function(){focus(inputLocation, msj6)});

function validateLocation(){
    var valorInput = inputLocation.value;
    var isValid = true;

    if(!haveAlpha(valorInput) || (valorInput.length < 3)){
        isValid = false;
    }
    if(valorInput == ""){
        inputLocation.classList.add("red");
        msj6.textContent = "Field required";
    }else if (isValid){
        msj6.textContent = "";
        inputLocation.classList.remove("red");
    } else {
        inputLocation.classList.add("red");
        msj6.textContent = "Must contain 3 or more characters";
    }
}

//Postal Code validation
var inputPostal = document.getElementById("postal-code");
var msj7 = document.getElementById("error7");

inputPostal.addEventListener("blur", validatePostal);
inputPostal.addEventListener("focus", function(){focus(inputPostal, msj7)});

function validatePostal(){
    var valorInput = inputPostal.value;
    var isValid = true;

    if((!haveNumbers(valorInput)) || (valorInput.length < 4 || valorInput.length > 5)){
        isValid = false;
    }
    if(valorInput == ""){
        inputPostal.classList.add("red");
        msj7.textContent = "Field required";
    }else if (isValid){
        msj7.textContent = "";
        inputPostal.classList.remove("red");
    } else {
        inputPostal.classList.add("red");
        msj7.textContent = "Must contain only numbers and between 4 or 5 characters";
    }
}

//Email validation
var inputEmail = document.getElementById("email-sign-up");
var msj8 = document.getElementById("error8");

inputEmail.addEventListener("blur", validateEmail);
inputEmail.addEventListener("focus", function(){focus(inputEmail, msj8)});

function validateEmail(){
    var valorInput = inputEmail.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var isValid = true;

    if(!emailExpression.test(valorInput)){
        isValid = false;
    }
    if(valorInput == ""){
        inputEmail.classList.add("red");
        msj8.textContent = "Field required";
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
inputPass.addEventListener("focus", function(){focus(inputPass, msj9)});

function validatePass(){
    var valorInput = inputPass.value;
    var isValid = true;

    if(!haveAlphaP(valorInput) || (valorInput.length < 8)){
        isValid = false;
    }
    if(valorInput == ""){
        inputPass.classList.add("red");
        msj9.textContent = "Field required";
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
inputPassR.addEventListener("focus", function(){focus(inputPassR, msj10)});

function validatePassR(){
    var valorInput = inputPassR.value;
    var isValid = true;

    if(valorInput != inputPass.value){
        isValid = false;
    }
    if(valorInput == ""){
        inputPassR.classList.add("red");
        msj10.textContent = "Field required";
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
document.addEventListener("DOMContentLoaded", loadData);

function send(){
    if(inputName.classList.contains("red") || inputSurname.classList.contains("red")
    || inputDni.classList.contains("red") || inputPhone.classList.contains("red")
    || inputDate.classList.contains("red") || inputAddress.classList.contains("red")
    || inputLocation.classList.contains("red") || inputPostal.classList.contains("red")
    || inputEmail.classList.contains("red") || inputPass.classList.contains("red")
    || inputPassR.classList.contains("red")|| inputPassR.value != inputPass.value){
        alert("One of the inputs are incorrect, please try again");
    }else{
        newDateF = changeDateFormat(inputDate.value);
        var url = "https://api-rest-server.vercel.app/signup?name="+inputName.value+"&lastName="+inputSurname.value
        +"&dni="+inputDni.value+"&dob="+newDateF+"&phone="+inputPhone.value+"&address="+inputAddress.value
        +"&city="+inputLocation.value+"&zip="+inputPostal.value+"&email="+inputEmail.value
        +"&password="+inputPass.value;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                if(data.success){
                    alert("Name: "+data.data.name
                    +"\nSurname: "+data.data.lastName
                    +"\nDNI: "+data.data.dni
                    +"\nDate of birth: "+data.data.dob
                    +"\nPhone: "+data.data.phone
                    +"\nAddress: "+data.data.address
                    +"\nCity: "+data.data.city
                    +"\nPostal code: "+data.data.zip
                    +"\nEmail: "+data.data.email
                    +"\nPassword: "+data.data.password);
                    createLocalStorage();
                }else{
                    var aux = "Error:\n";
                    data.errors.forEach( function(error){
                        aux += error.msg+"\n";
                    });
                    alert(aux);
                }
            })
            .catch(function (error) {
                alert("error: "+error);
            });
    }
}

function loadData(){
    inputName.value = localStorage.getItem("name");
    inputSurname.value = localStorage.getItem("lastName");
    inputDni.value = localStorage.getItem("dni");
    inputDate.value = changeDateFormatToForm(localStorage.getItem("dob"));
    inputPhone.value = localStorage.getItem("phone");
    inputAddress.value = localStorage.getItem("address");
    inputLocation.value = localStorage.getItem("city");
    inputPostal.value = localStorage.getItem("zip");
    inputEmail.value = localStorage.getItem("email");
    inputPass.value = localStorage.getItem("password");
    inputPassR.value = localStorage.getItem("password");
}

function changeDateFormatToForm(val){
    if(val == null){
        return "";
    }else{
        newStr = val.substring(6,10)+"-"+val.substring(0,2)+"-"+val.substring(3,5);
        return newStr;
    }
}

function createLocalStorage() {
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("lastName", inputSurname.value);
    localStorage.setItem("dni", inputDni.value);
    localStorage.setItem("dob", newDateF);
    localStorage.setItem("phone", inputPhone.value);
    localStorage.setItem("address", inputAddress.value);
    localStorage.setItem("city", inputLocation.value);
    localStorage.setItem("zip", inputPostal.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("password", inputPass.value);
}

