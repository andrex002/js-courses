var money = prompt('Ваш бюджет?');
var name = prompt('Название вашего магазина?');
var time = 19;

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
};

for (var i = 0; i < 5; i++) {
	var a = prompt('Какой тип товара будем продавать?');
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		i--;
	}
} 

/* Первый способ:
var i = 0;
while (i < 5) {
	var a = prompt('Какой тип товара будем продавать?');
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		i--;
	}
	i++;
}

Второй способ:
var i = 0;
do {
	var a = prompt('Какой тип товара будем продавать?');
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		i--;
	}
	i++
}
while (i < 5);
*/

if (time < 0) {
	console.log('Такого просто не может быть');
} else if(time >8 && time < 20) {
	console.log('Время работать!');
} else if(time < 24) {
	console.log('Уже слишком поздно!');
} else {
	console.log('В сутках только 24 часа!');
};

var budgetDay = mainList.budget/30;
alert ('Бюджет одного дня: ' + budgetDay);

console.log(mainList);