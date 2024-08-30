import {iosVhFix} from './utils/ios-vh-fix';
import {initBurgerMenu} from './nav-menu/burger-menu';
import {initHeroSwiper} from './swiper-slider/swiper-hero';
import {initToursSwiper} from './swiper-slider/swiper-tours';
import {initTrainingSwiper} from './swiper-slider/swiper-training';
import {initReviewsSwiper} from './swiper-slider/swiper-reviews';
import {desktopAdvantagesSwiper} from './swiper-slider/swiper-advantages';
import {initGallerySwiper} from './swiper-slider/swiper-gallery';
import './modules/form';


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initBurgerMenu();
    initHeroSwiper();
    initToursSwiper();
    initTrainingSwiper();
    initReviewsSwiper();
    desktopAdvantagesSwiper();
    initGallerySwiper();
  });
});
