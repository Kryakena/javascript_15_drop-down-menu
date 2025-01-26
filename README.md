# 📱 Адаптивное выпадающее меню 📱

Источник: видео "Выпадающее меню на CSS + адаптив под тачскрины" 
https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-125918837_456239146%2Fd816887db87d3881aa

![2025-01-03_14-05-36](https://github.com/user-attachments/assets/6c1476c3-ff56-45b0-951f-b306cbade465) ![2025-01-03_14-05-52](https://github.com/user-attachments/assets/0c0a8141-2399-4292-a2f8-c74ddb82a9a6) ![2025-01-03_14-06-13](https://github.com/user-attachments/assets/4708b0d5-47ba-4111-825c-829e38e3138f)



https://github.com/user-attachments/assets/4968f07f-edcd-43d2-a452-8d39509a1c8f


1. создаем создаем файлы index.html, style.css (в папке css), script.js (в папке js) в папке проекта.

2. в файле index.html готовим шаблон

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title></title>
    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Кодировка страницы -->
    <meta charset="utf-8">
    <!-- Адаптив -->
    <meta name="viewport" content="width=device-width">
</head>
<!-- Отображаемое тело страницы -->
<body>
<!-- Оболочка для демонстрации -->
<div class="wrapper">
    <!-- Контент -->
   
    <!-- Подключаем файл JS скриптов -->
    <script src="js/script.js"></script>
</div>
</body>
</html>
```

3. в файле style.css вставляем шаблон

```css
/* Обнуление */
*,*:before,*:after{
   padding: 0;
   margin: 0;
   border: 0;
   box-sizing: border-box;
}
/* Стили для демонстрации */
html,body{
   height: 100%;
   background-color: #333;
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
   color: #fff;
   font-size: 25px;
}
.wrapper{
   height: 100%;
   padding: 50px;
}
/* Основные стили */
```

4. в файл script.js вставляем шаблон для правильной работы тачскрина с мобильных устройств

```js
let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
```

5. в файле index.html называем проект в разделе head

```html
<title>Выпадающее меню</title>
```

6. в файле index.html создаем уровни в разделе body

```html
  <nav class="menu">
   <ul class="menu__list">
      <li>
         <a href="" class="menu__link">Первый уровень</a>
         <ul class="sub-menu__list">
            <li>
               <a href="" class="sub-menu__link">Второй уровень</a>
            </li>
            <li>
               <a href="" class="sub-menu__link">Второй уровень</a>
               <ul class="sub-sub--menu__list">
                  <li>
                     <a href="" class="sub-sub-menu__link">Третий уровень</a>
                  </li>
                  <li>
                     <a href="" class="sub-sub-menu__link">Третий уровень</a>
                  </li>
                  <li>
                     <a href="" class="sub-sub-menu__link">Третий уровень</a>
                  </li>
                  <li>
                     <a href="" class="sub-sub-menu__link">Третий уровень</a>
                  </li>
               </ul>
            </li>
            <li>
               <a href="" class="sub-menu__link">Второй уровень</a>
            </li>
            <li>
               <a href="" class="sub-menu__link">Второй уровень</a>
            </li>
         </ul>
      </li>
      <li>
         <a href="" class="menu__link">Первый уровень</a>
      </li>
      <li>
         <a href="" class="menu__link">Первый уровень</a>
      </li>
   </ul>
</nav>
```

7. в файл style.css переносим классы из html

```css
.menu {}
.menu_list {}
.menu_link {}
.sub-menu__list {}
.sub-menu__link {}
.sub-sub-menu__list {}
.sub-sub-menu__link {}
```

8. в файле style.css настраиваем Первый уровень

```css
.menu a{
   text-decoration: none; /* Убрать подчеркивание у ссылок */
}
.menu li{
   position: relative; /* Т.к. мы будем позиционировать только со стороны li */
   list-style: none; /* Убрать стандартную стилизацию */
}

.menu__list {
   display: flex; /* Выстроить все пункты в ряд: "Первый уровеньПервый уровеньПервый уровень" */
}
.menu__list>li{ /* Знак > значит, что касается только 1 элемента li */
   margin: 0 30px 0 0; /* Для всех элементов li отступ вправо: "Первый уровень Первый уровень Первый уровень" */
}

.menu__link {
   color: #fff;
}
```

9. в файле style.css настраиваем Второй уровень

```css
.menu__list>li:hover .sub-menu__list {
   display: block; /* При наведении на "Первый уровень" появляется выпадающий список "Второй уровень" */
}

.menu__link {
   color: #fff;
}

.sub-menu__list {
   display: none;
   min-width: 300px;
   position: absolute;
   left: 0;
   top: 20px; /* Должен список "Второй уровень" немного залезать на "Первый уровень" */
   padding: 20px 0 0 0; /* Прячет заползание "Второй уровень" на "Первый уровень" */
}

.sub-menu__list>li{
   background-color: #fff;
}

.sub-menu__link {
   color: #000;
   display: inline-block;
   padding: 5px 10px;
}
```

![9](https://github.com/user-attachments/assets/44002628-9f01-4fdd-be39-3c4fdaa0d0d6)


10. в файле style.css настраиваем Третий уровень

```css
.sub-menu__list>li:hover .sub-sub-menu__list {
   display: block; /* Прячем "Третий уровень" во "Второй уровень" */
}

.sub-menu__link {
   color: #000;
   display: inline-block;
   padding: 5px 10px;
}
.sub-sub-menu__list {
   display: none; /* Скрываем "Третий уровень" */
   position: absolute;
   top: 0;
   left: 100%; /* Чтобы "Третий уровень" выпадал справа от "Второго уровня" */
   min-width: 300px; /* Удобная ширина */
   padding: 0 0 0 5px;
}
.sub-sub-menu__list>li{
   background-color: #000;
}

.sub-sub-menu__link {
   color: #fff;
   display: inline-block;
   padding: 5px 10px;
}
```

![2025-01-03_01-50-17](https://github.com/user-attachments/assets/943c6b40-7d72-4586-aac9-f1387c95965e)


11. в файле настраиваем тачскрины (без этого не кликнуть на ссылку на экране телефона)

а) index.html
```html
<span class="menu__arrow arrow"></span>
```
б) style.css
```css
.arrow { /* Стрелка для выпадающего списка */
    display: none;
    position: absolute;
    right: 0;
    top: 12px;
    width: 0;
    height: 0;
    border-top: 10px solid #fff;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
}

.menu__arrow {}
```
в) script.js (навешиваем событие, при котором, если есть выпадающий список, то появляется местодля стрелочки)
```js
    let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch')
    let arrow= document.querySelectorAll('.arrow');
    for(i=0; i<arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling; // Это <a href="" class="menu__link">Первый уровень</a>
        let subMenu = arrow[i].nextElementSibling; // Это выпадающее меню <ul class="sub-menu__list">
        let thisArrow = arrow[i]; // Текущая стрелка

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {

        });
    }
} else {
    body.classList.add('mouse');
}
```
г) style.css переносим полностью классы ".sub-menu__list>li:hover .sub-sub-menu__list" и ".menu__list>li:hover .sub-menu__list" в body.mouse
```css
body.mouse .menu__list>li:hover .sub-menu__list {
    display: block; /* Прячем "Третий уровень" во "Второй уровень" */
}

body.mouse .sub-menu__list>li:hover .sub-sub-menu__list {
    display: block; /* Прячем "Третий уровень" во "Второй уровень" */
}
```
д) style.css добавляем новый класс
```css
.menu a.parent{ /* На мобильных устройствах отодвинется вправо стрелка, чтобы не наезжать на меню */
    margin: 0 30px 0 0;
}
```

![11д](https://github.com/user-attachments/assets/97dda40c-b04d-4d89-af8e-cecaa4785611)

12. script.js - событие по клику

```js
subMenu.classList.toggle('open'); // Чтобы после нажатия открывать выпадающее меню
thisArrow.classList.toggle('active'); // Чтобы стрелка при нажатии стала активной
```

![12](https://github.com/user-attachments/assets/7c8a54b2-a78f-4191-9b39-ea695426ef1a)


13. в style.css - При нажатии открывается и закрывается выпадающий списоки срабатывает ссылка

```css
/* При нажатии открывается и закрывается выпадающий списоки срабатывает ссылка */
body.touch .sub-menu__list.open{
    display: block;
}
body.touch .sub-sub-menu__list.open{
    display: block;
}
```

14. в style.css стилизуем стрелки

```css
.arrow.active {
    transform: rotate(-180deg); /* Разворот стрелки вверх в мобильной версии, если открыт выпадающий список */
}

body.touch .arrow {
    display: block;
}
```

15. дорабатываем html - добавляем стрелку в список и ее и стилизуем

index.html
```html
<span class="sub-menu__arrow arrow"></span>
```
style.css
```css
.sub-menu__arrow.arrow {
    right: 10px;
    border-left: 10px solid #000;
    border-right: none;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
```

16. Адаптивность выпадающего списка для мобилки и ПК

```css
/* Адаптация под вертикальные мобильные устройства */
@media (max-width: 767px) {
    .wrapper{
        padding: 15px;
    }
    .menu__list {
        display: block;
    }
    .menu__list>li{
        margin: 0 0 10px 0;
    }
    .sub-menu__list{ /* Выпадающее меню сдвигает вниз остальные пункты меню */
        position: relative;
        left: 0;
        top: 0;
    }
    .sub-sub-menu__list{ /* Выпадающее меню сдвигает вниз остальные пункты меню */
        padding: 0 5px;
        position: relative;
        left: 0;
        top: 0;
    }
    .sub-menu__arrow.arrow {
        right: 10px;
        top: 15px;
        border-bottom: none;
        border-left: 10px solid transparent;
        border-top: 10px solid #000;
        border-right: 10px solid transparent;
    }
}
```

# Итог

1. index.html

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title>Выпадающее меню</title>
    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Кодировка страницы -->
    <meta charset="utf-8">
    <!-- Адаптив -->
    <meta name="viewport" content="width=device-width">
</head>
<!-- Отображаемое тело страницы -->
<body>
<!-- Оболочка для демонстрации -->
<div class="wrapper">
    <!-- Контент -->
    <nav class="menu">
        <ul class="menu__list">
            <li>
                <a href="" class="menu__link">Первый уровень</a>
                <span class="menu__arrow arrow"></span>
                <ul class="sub-menu__list">
                    <li>
                        <a href="" class="sub-menu__link">Второй уровень</a>
                    </li>
                    <li>
                        <a href="" class="sub-menu__link">Второй уровень</a>
                        <span class="sub-menu__arrow arrow"></span>
                        <ul class="sub-sub-menu__list">
                            <li>
                                <a href="" class="sub-sub-menu__link">Третий уровень</a>
                            </li>
                            <li>
                                <a href="" class="sub-sub-menu__link">Третий уровень</a>
                            </li>
                            <li>
                                <a href="" class="sub-sub-menu__link">Третий уровень</a>
                            </li>
                            <li>
                                <a href="" class="sub-sub-menu__link">Третий уровень</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="" class="sub-menu__link">Второй уровень</a>
                    </li>
                    <li>
                        <a href="" class="sub-menu__link">Второй уровень</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="" class="menu__link">Первый уровень</a>
            </li>
            <li>
                <a href="" class="menu__link">Первый уровень</a>
            </li>
        </ul>
    </nav>
    <!-- Подключаем файл JS скриптов -->
    <script src="js/script.js"></script>
</div>
</body>
</html>
```

![2025-01-03_14-03-14](https://github.com/user-attachments/assets/477795b9-a553-461d-8729-44935a7e11dc)
![2025-01-03_14-03-45](https://github.com/user-attachments/assets/31448dd0-b477-43b9-8d1b-ce824851c058)


2. style.css

```css
/* Обнуление */
*,*:before,*:after{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
/* Стили для демонстрации */
html,body{
    height: 100%;
    background-color: #333;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #fff;
    font-size: 25px;
}
.wrapper{
    height: 100%;
    padding: 50px;
}
/* Основные стили */

.menu {}
.menu a{
    text-decoration: none; /* Убрать подчеркивание у ссылок */
}
.menu a.parent{ /* На мобильных устройствах отодвинется вправо стрелка, чтобы не наезжать на меню */
    margin: 0 30px 0 0;
}

.menu li{
    position: relative; /* Т.к. мы будем позиционировать только со стороны li */
    list-style: none; /* Убрать стандартную стилизацию */
}

.menu__list {
    display: flex; /* Выстроить все пункты в ряд: "Первый уровеньПервый уровеньПервый уровень" */
}
.menu__list>li{ /* Знак > значит, что касается только 1 элемента li */
    margin: 0 30px 0 0; /* Для всех элементов li отступ вправо: "Первый уровень Первый уровень Первый уровень" */
}

.menu__link {
    color: #fff;
}

.sub-menu__list {
    display: none;
    min-width: 300px;
    position: absolute;
    left: 0;
    top: 20px; /* Должен список "Второй уровень" немного залезать на "Первый уровень" */
    padding: 20px 0 0 0; /* Прячет заползание "Второй уровень" на "Первый уровень" */
}

.sub-menu__list>li{
    background-color: #fff;
}

.sub-menu__link {
    color: #000;
    display: inline-block;
    padding: 5px 10px;
}
.sub-sub-menu__list {
    display: none; /* Скрываем "Третий уровень" */
    position: absolute;
    top: 0;
    left: 100%; /* Чтобы "Третий уровень" выпадал справа от "Второго уровня" */
    min-width: 300px; /* Удобная ширина */
    padding: 0 0 0 5px;
}
.sub-sub-menu__list>li{
    background-color: #000;
}

.sub-sub-menu__link {
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
}

.arrow { /* Стрелка для выпадающего списка */
    display: none;
    position: absolute;
    right: 0;
    top: 12px;
    width: 0;
    height: 0;
    border-top: 10px solid #fff;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
}
.arrow.active {
    transform: rotate(-180deg); /* Разворот стрелки вверх, если открыт выпадающий список */
}

.sub-menu__arrow.arrow {
    right: 10px;
    border-left: 10px solid #000;
    border-right: none;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}

.menu__arrow {}


body.mouse .menu__list>li:hover .sub-menu__list {
    display: block; /* Прячем "Третий уровень" во "Второй уровень" */
}

body.mouse .sub-menu__list>li:hover .sub-sub-menu__list {
    display: block; /* Прячем "Третий уровень" во "Второй уровень" */
}

/* При нажатии открывается и закрывается выпадающий списоки срабатывает ссылка */
body.touch .sub-menu__list.open{
    display: block;
}
body.touch .sub-sub-menu__list.open{
    display: block;
}
body.touch .arrow {
    display: block;
}

/* Адаптация под вертикальные мобильные устройства */
@media (max-width: 767px) {
    .wrapper{
        padding: 15px;
    }
    .menu__list {
        display: block;
    }
    .menu__list>li{
        margin: 0 0 10px 0;
    }
    .sub-menu__list{ /* Выпадающее меню сдвигает вниз остальные пункты меню */
        position: relative;
        left: 0;
        top: 0;
    }
    .sub-sub-menu__list{ /* Выпадающее меню сдвигает вниз остальные пункты меню */
        padding: 0 5px;
        position: relative;
        left: 0;
        top: 0;
    }
    .sub-menu__arrow.arrow {
        right: 10px;
        top: 15px;
        border-bottom: none;
        border-left: 10px solid transparent;
        border-top: 10px solid #000;
        border-right: 10px solid transparent;
    }
}
```

![2025-01-03_14-04-01](https://github.com/user-attachments/assets/9d6d3704-efaf-42e7-82b0-1f30552f2914)
![2025-01-03_14-04-17](https://github.com/user-attachments/assets/66b82824-06e8-4c45-89c1-ac42db17381b)
![2025-01-03_14-04-34](https://github.com/user-attachments/assets/d3a9d9c3-6c28-421d-91c3-e31deb98c2ad)
![2025-01-03_14-04-45](https://github.com/user-attachments/assets/b988833f-3fc2-4963-b382-1e267e505cf4)


3. script.js

```js
let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch')
    let arrow= document.querySelectorAll('.arrow');
    for(i=0; i<arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling; // Это <a href="" class="menu__link">Первый уровень</a>
        let subMenu = arrow[i].nextElementSibling; // Это выпадающее меню <ul class="sub-menu__list">
        let thisArrow = arrow[i]; // Текущая стрелка

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open'); // Чтобы после нажатия открывать выпадающее меню
            thisArrow.classList.toggle('active'); // Чтобы стрелка при нажатии стала активной
        });
    }
} else {
    body.classList.add('mouse');
}
```

![2025-01-03_14-04-59](https://github.com/user-attachments/assets/a981dfb1-4db6-4a61-a207-3c8907098963)
