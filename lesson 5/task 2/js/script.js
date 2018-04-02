//Получить кнопку "Открыть магазин" через id
var button = document.getElementById('open-btn');

//Получить все поля в левом меню через классы
var name = document.getElementsByClassName('name');
var budget = document.getElementsByClassName('budget');
var goods = document.getElementsByClassName('goods');
var items = document.getElementsByClassName('items');
var employers = document.getElementsByClassName('employers');
var discount = document.getElementsByClassName('discount');
var isopen = document.getElementsByClassName('isopen');

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
