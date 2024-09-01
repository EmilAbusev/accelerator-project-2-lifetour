import Swiper from 'swiper/bundle';
import 'swiper/css';

const swiperSlider = document.querySelector('.slider-reviews');
const swiperButtonPrev = document.querySelector('.reviews__navigation-prev');
const swiperButtonNext = document.querySelector('.reviews__navigation-next');


const mySwiper = () => {
  new Swiper(swiperSlider, {
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },

    speed: 500,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        allowTouchMove: true,
      },
    },
  });
};


const initReviewsSwiper = () => {
  if (document.contains(swiperSlider)) {
    mySwiper();
  }
};

export { initReviewsSwiper };
