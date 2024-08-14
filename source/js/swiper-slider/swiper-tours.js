import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperSlider = document.querySelector('.slider-tours');
const swiperButtonPrev = document.querySelector('.tours__navigation-prev');
const swiperButtonNext = document.querySelector('.tours__navigation-next');


const mySwiper = () => {
  new Swiper(swiperSlider, {
    modules: [Navigation],
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
};


const initToursSwiper = () => {
  if (document.contains(swiperSlider)) {
    mySwiper();
  }
};

export { initToursSwiper };
