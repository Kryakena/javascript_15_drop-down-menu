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