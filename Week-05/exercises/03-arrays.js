console.log('3-a:');
var mounths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Mounth 5: ',mounths[4], '  Mounth 11: ',mounths[10]);

console.log('3-b:');
mounths.sort();
console.log('Months in alphabetical order: ',mounths);

console.log('3-c:');
var mounths2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mounths2.unshift('Before');
mounths2.push('After');
console.log('Mounths unshift and push: ',mounths2);

console.log('3-d:');
mounths2.shift();
mounths2.pop();
console.log('Mounths shift and pop: ',mounths2);

console.log('3-e:');
mounths2.reverse();
console.log('Reverse mounths: ',mounths2);
mounths2.reverse();

console.log('3-f:');
console.log('Months separated by - : ',mounths2.join('-'));

console.log('3-g:');
var lapse = mounths2.slice(4, 11);
console.log('Mounths Mayo-Noviembre: ',lapse);