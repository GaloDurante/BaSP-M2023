console.log('Ejercicio 4');
console.log('4-a:');
var random = Math.random();
if(random >= 0.5){
    console.log('Greater than or equal to 0.5');
}else{
    console.log('Lower than 0,5');
}

console.log('4-b:');
var age = 45;
if (age < 2) {
    console.log("Bebe");
  } else if (age >= 2 && age <= 12) {
    console.log("Niño");
  } else if (age >= 13 && age <= 19) {
    console.log("Adolescente");
  } else if (age >= 20 && age <= 30) {
    console.log("Joven");
  } else if (age >= 31 && age <= 60) {
    console.log("Adulto");
  } else if (age >= 61 && age <= 75) {
    console.log("Adulto mayor");
  } else {
    console.log("Anciano");
  }