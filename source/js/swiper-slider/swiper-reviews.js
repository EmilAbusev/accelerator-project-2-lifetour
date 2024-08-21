import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperSlider = document.querySelector('.slider-reviews');
const swiperButtonPrev = document.querySelector('.reviews__navigation-prev');
const swiperButtonNext = document.querySelector('.reviews__navigation-next');


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
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 120,
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
