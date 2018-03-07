//自带的js
var swiper = new Swiper('.swiper-container.lunbo', {
      pagination: {
        el: '.swiper-pagination',
      },
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        loop : true,
    });
    
var swiper2 = new Swiper('.swiper-container.zuohua1', {
      slidesPerView: 3.5,
      spaceBetween: 6,
    });
    
var swiper3 = new Swiper('.swiper-container.zuohua2', {
      effect: 'coverflow',
//    slidesOffsetBefore : -120,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
          loop : true,
      coverflowEffect: {
        rotate:50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
var swiper4 = new Swiper('.swiper-container.zuohua3', {
      slidesPerView: 2.5,
      spaceBetween: 6,
    });
//自带的js结束