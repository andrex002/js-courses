var money = prompt('Ваш бюджет?');
var name = prompt('Название вашего магазина?');

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
};

mainList.shopGoods[0] = prompt ('Какой тип товара будем продавать?');
mainList.shopGoods[1] = prompt ('Какой тип товара будем продавать?');
mainList.shopGoods[2] = prompt ('Какой тип товара будем продавать?'); 
console.log (shopGoods);

var budgetDay = mainList.budget/30;
alert ('Бюджет одного дня: ' + budgetDay);