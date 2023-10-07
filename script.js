const swiperComment = new Swiper('.swiperComment', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 20
      },
    },
  
    pagination: {
      el: '.swiper-pagination-comment',
    },
  
    navigation: {
      nextEl: '.swiper-button-nextCom',
      prevEl: '.swiper-button-prevCom',
    },
  
  });