var num = 33721;
var numString = String (num);
var array = [];
var numTotal = 1;
console.log (numString);
for (var i = 0; i < numString.length; i++) {
	array[i] = num%10;
	num = parseInt (num/10);
	numTotal *= array[i];
}
console.log (array);
console.log ('Произведение цифр числа 33721 = ' + numTotal);
var numTotalDegree = 1;
var n = 3
for (var i = 0; i < n; i++) {
	numTotalDegree *= numTotal;
}
console.log (numTotal + ' в степени ' + n + ' равно ' + numTotalDegree);