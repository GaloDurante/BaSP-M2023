console.log('Ejercicio 6');
console.log('6-a:');
function suma(num, num2) {
    return num + num2;
}
var resultado = suma(5,10);
console.log('El resultado es: ',resultado);

console.log('6-b:');
function sumaValidacion(num, num2){
    if (isNaN(num) || isNaN(num2)) {
        alert('Uno de los parámetros no es un número.');
        return NaN;
      }
      return num + num2;
}
resultado = sumaValidacion(10,10);
console.log('El resultado es: ',resultado);

console.log('6-c:');
function validaInteger(num){
    return Number.isInteger(num);
}
var bandera = validaInteger('a');
console.log('Es numero? ',bandera);

console.log('6-d:');
function addBetter(num, num2){
    if (!validaInteger(num) || !validaInteger(num2)) {
        alert("Error: Uno de los números no es un número entero.");
        num = Math.round(num);
        num2 = Math.round(num2);
      }
      return num + num2;
}
resultado = addBetter(4,7);
console.log('El resultado es: ',resultado);

console.log('6-e:');
function addBetter2(num, num2){
    num = validateRound(num);
    num2 = validateRound(num2)
    return num + num2;
}

function validateRound(num){
    if (!validaInteger(num)) {
        alert('Error: Uno de los números no es un número entero.');
        num = Math.round(num);
    }
    return num;
}
resultado = addBetter2(2.7,7);
console.log('El resultado es: ',resultado);