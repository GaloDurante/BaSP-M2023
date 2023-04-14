console.log('Ejercicio 5');
console.log('5-a:');
var array = ['marcos', 'matias', 'juana', 'messi', 'sofia' ];
for (var i = 0; i < array.length; i++) {
    console.log('Palabra ',i+1,': ',array[i]);
}

console.log('5-b:');
for (var i = 0; i < array.length; i++) {
    var letra = array[i].substring(0,1).toUpperCase();
    var frase = letra + (array[i].substring(1,array[i].length).toLowerCase());
    console.log('Palabra ',i+1,': ',frase);
}

console.log('5-c:');
var sentence = '';
for (var i = 0; i < array.length; i++) {
    sentence += array[i] + ' '; 
}
console.log('Frase completa: ',sentence);

console.log('5-d:');
var empty = [];
for (let i = 0; i < 10; i++) {
    empty[i] = i;
}
console.log('Array completo: ',empty);