var money,
	name, 
	time,
	price

function start() {
	money = prompt('Ваш бюджет?');
	while (isNaN(money) || money == "" || money == null) {
		money = prompt('Ваш бюджет?');
	}
	name = prompt('Название вашего магазина?').toUpperCase();
	time = 19;
}
start();

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
};
function chooseGoods() {
	for (var i = 0; i < 5; i++) {
		var a = prompt('Какой тип товара будем продавать?');
		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			i--;
		}
	} 
}
chooseGoods();

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
function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть');
	} else if(time >8 && time < 20) {
		console.log('Время работать!');
	} else if(time < 24) {
		console.log('Уже слишком поздно!');
	} else {
		console.log('В сутках только 24 часа!');
	};
}
workTime(7);

function calcDailyBudget() {
	var budgetDay = mainList.budget/30;
	alert ('Бюджет одного дня: ' + budgetDay);
}
calcDailyBudget();

function calcDiscount() {
	if (mainList.discount == true) {
		price *= 0.8;
	}
}

function employers() {
	for (var i = 1; i <= 4; i++) {
		var nameEmployee = prompt('Введите имя сотрудника');
		nameEmployee = nameEmployee[0].toUpperCase() + nameEmployee.slice(1);
		mainList.employers[i] = nameEmployee;
	}
}
employers();

console.log(mainList);