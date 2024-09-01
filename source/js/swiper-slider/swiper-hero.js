
import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperSlider = document.querySelector('.slider-hero');
const swiperPagination = document.querySelector('.slider-hero__pagination');

const mySwiper = () => {
  new Swiper(swiperSlider, {
    modules: [Pagination],
    pagination: {
      el: swiperPagination,
      clickable: true,
      type: 'bullets',
    },

    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 500,

    breakpoints: {
      1440: {
        allowTouchMove: false,
      }
    },
  });
};

const initHeroSwiper = () => {
  if (document.contains(swiperSlider)) {
    mySwiper();
  }
};

export { initHeroSwiper };
