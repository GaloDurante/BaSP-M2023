console.log('Ejercicio 3');
console.log('3-a:');
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Mes 5: ',meses[4], '  Mes 11: ',meses[10]);

console.log('3-b:');
meses.sort();
console.log('Meses ordenados alfabeticamente: ',meses);

console.log('3-c:');
var meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses2.unshift('Antes');
meses2.push('Despues');
console.log('Meses unshift y push: ',meses2);

console.log('3-d:');
meses2.shift();
meses2.pop();
console.log('Meses shift y pop: ',meses2);

console.log('3-e:');
meses2.reverse();
console.log('Meses al reves: ',meses2);
meses2.reverse();

console.log('3-f:');
console.log('Meses separados por - : ',meses2.join('-'));

console.log('3-g:');
var lapsoMeses = meses2.slice(4, 11);
console.log('Meses Mayo-Noviembre: ',lapsoMeses);