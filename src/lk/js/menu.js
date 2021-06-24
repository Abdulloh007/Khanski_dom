window.addEventListener('DOMContentLoaded', function () {
    'use strict';

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
            navMobile.classList.remove('fix');
        }
    })
})
