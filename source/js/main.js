// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import {iosVhFix} from './utils/ios-vh-fix';
import {initBurgerMenu} from './nav-menu/burger-menu';
import {initSwiper} from './modules/swiper/swiper-hero';


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initBurgerMenu();
    initSwiper();
  });
});
