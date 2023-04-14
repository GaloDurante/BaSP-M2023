console.log('2-a:');
var str = 'more than ten characters';
console.log('String uppercase: ', str.toUpperCase());

console.log('2-b:');
var strMin = str.substring(0,5);
console.log('First five characters: ',strMin);

console.log('2-c:');
var strLast = str.substring(str.length-3, str.length);
console.log('Last three characters: ',strLast);

console.log('2-d:');
var letterUp = str.substring(0,1).toUpperCase();
var restPhrase = str.substring(1, str.length).toLowerCase();
var phraseComplete = letterUp + restPhrase;
console.log('Complete phrase: ',phraseComplete);

console.log('2-e:');
var positionSpace = str.indexOf(' ');
console.log('Position of the first space: ',positionSpace);

console.log('2-f:');
var strLarge = 'contrarrevolucionario anticonstitucionalidad';
var letterFirst = strLarge.substring(0,1).toUpperCase();
var space = strLarge.indexOf(' ');
var wordFirst = strLarge.substring(1, space).toLowerCase();
var letterSecond = strLarge.substring(space+1, space+2).toUpperCase();
var wordSecond = strLarge.substring(space+2, strLarge.length).toLowerCase();
var phrase = letterFirst + wordFirst + ' ' + letterSecond + wordSecond;
console.log('Complete phrase: ',phrase);

