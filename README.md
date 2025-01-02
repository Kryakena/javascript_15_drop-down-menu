# Выпадающее меню

Источник: видео "Выпадающее меню на CSS + адаптив под тачскрины" 
https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-125918837_456239146%2Fd816887db87d3881aa

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

4. в файл script.js вставляем шаблон

```js
$(document).ready(function () {

});
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
   margin: 0 10px 0 0; /* Для всех элементов li отступ вправо: "Первый уровень Первый уровень Первый уровень" */
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

11. в файле style.css настраиваем тачскрины

```css

```