var budget;
var nameStore;
var shopGoods = [];
var employers = {};
var open;

budget = prompt ('Ваш бюджет?');
console.log (budget);
nameStore = prompt ('Название вашего магазина?');
console.log (nameStore);

var mainList = {
	budget,
	nameStore,
	shopGoods,
	employers,
	open
};

mainList.shopGoods[0] = prompt ('Какой тип товара будем продавать?');
mainList.shopGoods[1] = prompt ('Какой тип товара будем продавать?');
mainList.shopGoods[2] = prompt ('Какой тип товара будем продавать?'); 
console.log (shopGoods);

var budgetDay = budget/30;
alert ('Бюджет одного дня: ' + budgetDay);