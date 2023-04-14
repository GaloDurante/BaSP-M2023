console.log('4-a: (first alert)');
var random = Math.random();
if(random >= 0.5){
    alert('Greater than or equal to 0.5');
}else{
    alert('Lower than 0,5');
}

console.log('4-b: (second alert)');
var age = 45;
if (age < 2) {
    alert("Baby");
  } else if (age >= 2 && age <= 12) {
    alert("Child");
  } else if (age >= 13 && age <= 19) {
    alert("Teen");
  } else if (age >= 20 && age <= 30) {
    alert("Young");
  } else if (age >= 31 && age <= 60) {
    alert("Adult");
  } else if (age >= 61 && age <= 75) {
    alert("Elderly");
  } else {
    alert("Old man");
  }