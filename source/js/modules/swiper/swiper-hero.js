import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperSlider = document.querySelector('.swiper');
const swiperPagination = document.querySelector('.swiper-pagination');

const heroSwiper = () => {
  new Swiper(swiperSlider, {
    modules: [Pagination],
    pagination: {
      el: swiperPagination,
      clickable: true,
      type: 'bullets',
    },

    breakpoints: {
      1439: {
        allowTouchMove: false,
      }
    },

    loop: true,
  });
};

const initSwiper = () => {
  if (document.contains(swiperSlider)) {
    heroSwiper();
  }
};

export { initSwiper };
