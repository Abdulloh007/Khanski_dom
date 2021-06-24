window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //Event poster Slider
   const swiper = new Swiper(".kh-poster-slider", {
       observer: true,
       observeParents: true,
       speed: 1000,
       slidesPerView: 1,
       spaceBetween: 15,
       pagination: {
       el: ".swiper-pagination",
       dynamicBullets: true,
       },
       autoplay: {
       delay: 5000,
       },
       loop: true
   });

   //Event ---?
   const downBtn = document.querySelector('.kh-show-all i'),
   eventWrap = document.querySelector('.kh-chart_w-list'),
   eventItems = eventWrap.querySelectorAll('.kh-chat-item');
   let totalH = 45;

   for (let i = 0; i < 6; i++) {
       totalH += eventItems[i].clientHeight;
       eventWrap.style.maxHeight = totalH + 'px';
   }

})
