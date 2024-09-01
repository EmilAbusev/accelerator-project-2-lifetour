import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperSlider = document.querySelector('.slider-training');
const swiperButtonPrev = document.querySelector('.training__navigation-prev');
const swiperButtonNext = document.querySelector('.training__navigation-next');


const mySwiper = () => {
  new Swiper(swiperSlider, {
    modules: [Navigation],
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },

    speed: 500,

    breakpoints: {
      320: {
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        initialSlide: 0,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        initialSlide: 0,
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: true,
      },
    },
  });
};


const initTrainingSwiper = () => {
  if (document.contains(swiperSlider)) {
    mySwiper();
  }
};

export { initTrainingSwiper };
