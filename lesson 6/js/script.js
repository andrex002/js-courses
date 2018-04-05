//Получить кнопку "Открыть магазин" через id
var openBtn = document.getElementById('open-btn');

//Получить все поля в левом меню через классы
var name = document.getElementsByClassName('name');
var nameValue = document.getElementsByClassName('name-value')[0];
var budget = document.getElementsByClassName('budget')[0];
var budgetValue = document.getElementsByClassName('budget-value')[0];
var goods = document.getElementsByClassName('goods');
var goodsValue = document.getElementsByClassName('goods-value')[0];
var items = document.getElementsByClassName('items');
var itemsValue = document.getElementsByClassName('items-value')[0];
var employers = document.getElementsByClassName('employers');
var employersValue = document.getElementsByClassName('employers-value')[0];
var discount = document.getElementsByClassName('discount');
var discountValue = document.getElementsByClassName('discount-value')[0];
var isopen = document.getElementsByClassName('isopen');
var isopenValue = document.getElementsByClassName('isopen-value')[0];

//Получить поля категории товаров через класс
var goodsItem = document.getElementsByClassName('goods-item');

//Получить все 3 кнопки через Tag
var mainFunctions = document.querySelector('.main-functions');
var buttonMainFunctions = mainFunctions.getElementsByTagName('button');

//Получить поля ввода товаров, времени и расчета бюджета через querySelector
var chooseItem = document.querySelector('.choose-item');
var timeValue = document.querySelector('.time-value');
var countBudgetValue = document.querySelector('.count-budget-value');

//Получить поля имен сотрудников через querySelectorAll
var hireEmployersItem = document.querySelectorAll('.hire-employers-item');

var money,
	name,
	price

openBtn.addEventListener('click', () => {
	money = prompt('Ваш бюджет?');
	
	while (isNaN(money) || money == "" || money == null) {
		money = prompt('Ваш бюджет?');
	}
	budgetValue.textContent = money;
	nameValue.textContent = prompt('Название вашего магазина?').toUpperCase();
});

buttonMainFunctions[0].addEventListener('click', () => {
	for (var i = 0; i < goodsItem.length; i++) {
			var a = goodsItem[i].value;

		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		} else {
			i--;
		}
	}
});

chooseItem.addEventListener('change', () => {
	for (var i = 0; i < 1; i++) {
			var items = chooseItem.value;
			if ((typeof(items)) === 'string' && items != '') {
				mainList.shopItems = items.split(', ');
				mainList.shopItems.sort();
				itemsValue.textContent = mainList.shopItems;
			} else {
				i--;
			}
		}
});

timeValue.addEventListener('change', () => {
	var time = timeValue.value;
	if (time < 0) {
			console.log('Такого просто не может быть');
			mainList.open = false;
		} else if(time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
		} else if(time < 24) {
			console.log('Уже слишком поздно!');
			mainList.open = false;
		} else {
			console.log('В сутках только 24 часа!');
			mainList.open = false;
		};
	if (mainList.open == true) {
		isopenValue.style.backgroundColor = 'green';
	}	else {
			isopenValue.style.backgroundColor = 'red';
		}
});

buttonMainFunctions[1].addEventListener('click', () => {
	countBudgetValue.value = money / 30;
});

buttonMainFunctions[2].addEventListener('click', () => {
	for (var i = 0; i < hireEmployersItem.length; i++) {
		var nameEmployee = hireEmployersItem[i].value;
		nameEmployee = nameEmployee[0].toUpperCase() + nameEmployee.slice(1);
		mainList.employers[i] = nameEmployee;

		employersValue.textContent += mainList.employers[i] + ', ';
	}
});

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	
	calcDiscount: function calcDiscount() {
		if (mainList.discount == true) {
			price *= 0.8;
		}
	},
	employers: function employers() {
		
	},
};
mainList.chooseShopItems();
mainList.shopItems.forEach(function(item, i, arr) {
	console.log('У нас вы можете купить: ' + ++i + ': ' + item);
});

for (var key in mainList) {
	console.log('Наш магазин включает в себя: ' + key);
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