window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //Navigation Menu
    const navMenuBtn = document.querySelector('.kh-menu-btn');

    navMenuBtn.addEventListener('click', function(){
        if (this.classList.contains('active') == false) {
            this.classList.add('active');
        }
        else if (this.classList.contains('active') == true) {
            this.classList.remove('active');
        }
    })

    //Swiper Sliders
    //NEW HOUSE SLIDER
    const swiper = new Swiper(".kh-new_proj-slider", {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            567: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 4
            }
        },
        // pagination: {
        // el: ".swiper-pagination",
        // dynamicBullets: true,
        // },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        autoplay:
        {
        delay: 5000,
        },
        loop: true
    });
    //READY HOUSES SLIDER
    const readySwiper = new Swiper(".kh-ready_houses-slider", {
        speed: 1000,
        spaceBetween: 15,
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        },
        navigation: {
        nextEl: ".kh-ready_button-next",
        prevEl: ".kh-ready_button-prev",
        },
        autoplay:
        {
        delay: 5000,
        },
        loop: true
    });
    //PARTFOLIO SLIDER
    const partfolioSwiper = new Swiper(".kh-partfolio-slider", {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            768: {
                slidesPerView: 2
            }
        },
        navigation: {
        nextEl: ".kh-partfolio_button-next",
        prevEl: ".kh-partfolio_button-prev",
        },
        autoplay:
        {
        delay: 5000,
        },
        loop: true
    });
    //SERVICE SLIDER
    const serviceSwiper = new Swiper(".kh-service-slider", {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            567: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 4
            }
        },
        navigation: {
        nextEl: ".kh-service-btn-next",
        prevEl: ".kh-service-btn-prev",
        },
        autoplay:
        {
        delay: 5000,
        },
        loop: true
    });
    //INSTAGRAM SLIDER
    const instagramSwiper = new Swiper(".kh-instagram-slider", {
        speed: 1000,
        slidesPerView: 2,
        spaceBetween: 15,
        breakpoints: {
            567: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 6
            }
        },
        navigation: {
        nextEl: ".kh-instagram-btn-next",
        prevEl: ".kh-instagram-btn-prev",
        },
        autoplay:
        {
        delay: 5000,
        },
        loop: true
    });


    //Mobile Menu Srcipt
    const sideBar = document.querySelector('.kh-m_side-bar'),
    sideBarOverlay = document.querySelector('.kh-m_overlay'),
    sideBarBtn = document.querySelector('.kh-humburger');

    sideBarBtn.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            sideBar.classList.remove('open');
            sideBarOverlay.classList.remove('open');
            sideBarOverlay.style.display = 'none'
            document.documentElement.style.overflow = ''
        }
        else {
            this.classList.add('active');
            sideBar.classList.add('open');
            sideBarOverlay.classList.add('open');
            sideBarOverlay.style.display = '';
            document.documentElement.style.overflow = 'hidden'
        }
    });

    //ScrollTop Fixed menu
    const navMobile = document.querySelector('.kh-mobile-menu');

    window.addEventListener('scroll', ()=>{
        if (document.documentElement.scrollTop > 80) {
            navMobile.classList.add('fix');
        }else {
            navMobile.classList.remove('fix')
        }
    })
})
