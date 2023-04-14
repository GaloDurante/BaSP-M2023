console.log('6-a:');
function add(num, num2) {
    return num + num2;
}
var result = add(5,10);
console.log('Result: ',result);

console.log('6-b:');
function addValidation(num, num2){
    if (isNaN(num) || isNaN(num2)) {
        alert('One of the parameters is not a number.');
        return NaN;
      }
      return num + num2;
}
result = addValidation(10,10);
console.log('Result: ',result);

console.log('6-c:');
function validateInteger(num){
    return Number.isInteger(num);
}
var flag = validateInteger('a');
console.log('Is integer? ',flag);

console.log('6-d:');
function addBetter(num, num2){
    if (!validateInteger(num) || !validateInteger(num2)) {
        alert("Error: One of the numbers is not an integer.");
        num = Math.round(num);
        num2 = Math.round(num2);
      }
      return num + num2;
}
result = addBetter(4,7);
console.log('Result: ',result);

console.log('6-e:');
function addBetter2(num, num2){
    num = validateRound(num);
    num2 = validateRound(num2)
    return num + num2;
}

function validateRound(num){
    if (!validateInteger(num)) {
        alert('Error: One of the numbers is not an integer.');
        num = Math.round(num);
    }
    return num;
}
result = addBetter2(3,7);
console.log('Result: ',result);