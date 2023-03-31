// Для карусели
// Для стрелок-переключателей на карусели
var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,   // центрированный элемент
    loop: true,  // зацикленность
    margin: 20, // отступ между слайдами
    startPosition: 0,    // стартует со 2-го элемента
    items: 1,    // кол-во слайдов за цикл

    // для мобильной адаптации экрана
    responsive : {
        0 : {
            margin: 10,
        },

        460 : {
            margin: 10,
            startPosition: 1,
            items: 2,
        },

        850 : {
            margin: 20,
            items: 3,
            startPosition: 1,
        },

        1150 : {
            startPosition: 1,
            items: 3,
            margin: 30,
        }
    }
});

// переключатель вперёд
$('.slider_btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

// переключатель назад
$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})


// Навигация и иконка навигации (При разрешении экрана меньше 1000px)
const navBtn = document.querySelector('.nav_toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
    menuIcon.classList.toggle('menu-icon-active');
    nav.classList.toggle('nav-mobile');
    document.body.classList.toggle('no-scroll');
}