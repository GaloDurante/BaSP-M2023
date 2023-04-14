console.log('Ejercicio 2');
console.log('2-a:');
var cadena = 'tengo mas de diez caracteres';
console.log('Cadena en mayuscula: ', cadena.toUpperCase());

console.log('2-b:');
var cadMenor = cadena.substring(0,5);
console.log('Primeros cinco caracteres: ',cadMenor);

console.log('2-c:');
var cadUltimos = cadena.substring(cadena.length-3, cadena.length);
console.log('Ultimos tres caracteres: ',cadUltimos);

console.log('2-d:');
var letraMayus = cadena.substring(0,1).toUpperCase();
var restoFraseMinus = cadena.substring(1, cadena.length).toLowerCase();
var frase = letraMayus + restoFraseMinus;
console.log('Cadena completa: ',frase);

console.log('2-e:');
var posicionEspacio = cadena.indexOf(' ');
console.log('Posicion del primer espacio: ',posicionEspacio);

console.log('2-f:');
var palabraLarga = 'contrarrevolucionario anticonstitucionalidad';
var letraPrimerPalabra = palabraLarga.substring(0,1).toUpperCase();
var espacio = palabraLarga.indexOf(' ');
var minusculaPrimerPalabra = palabraLarga.substring(1, espacio).toLowerCase();
var letraSegundaPalabra = palabraLarga.substring(espacio+1, espacio+2).toUpperCase();
var minusculaSegundaPalabra = palabraLarga.substring(espacio+2, palabraLarga.length).toLowerCase();
var fraseCompleta = letraPrimerPalabra + minusculaPrimerPalabra + ' ' + letraSegundaPalabra + minusculaSegundaPalabra;
console.log('Cadena completa: ',fraseCompleta);

