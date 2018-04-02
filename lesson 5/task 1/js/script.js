var menuItem = document.getElementsByClassName('menu-item');
console.log(menuItem);
var menu = document.getElementsByClassName('menu')[0];
console.log(menu);
var a = menu.replaceChild(menuItem[1],menuItem[2]);

console.log(a);
menu.insertBefore(a, menuItem[1]);
var newLi = document.createElement('li');
newLi.classList.add('menu-item');
newLi.innerHTML = 'Пятый пункт';
menu.appendChild(newLi);

var body = document.getElementsByTagName('body')[0];
console.log(body);
body.style.background = 'url(img/apple_true.jpg)';

var title = document.getElementsByClassName('title')[0];
console.log(title);
title.textContent = 'Мы продаем только подлинную технику Apple';

var adv = document.querySelector('.adv');
console.log(adv);
adv.parentNode.removeChild(adv);

var question = prompt('Ваше отношение к технике Apple?');
var prompt = document.querySelector('.prompt');
prompt.textContent = question;