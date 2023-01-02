$('.slider').slick({
    fade:true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});

$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});


const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.menu');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
});