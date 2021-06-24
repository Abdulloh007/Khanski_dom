window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //Reviews Tabination
    const rTabinations = document.querySelectorAll('.kh-review-tabination');

    function runTabActivation(elem) {
        const rTabNav = elem.querySelector('.kh-r_tab-nav'),
        rTabBtn = rTabNav.querySelectorAll('.kh-r_tab-btn'),
        rTabContent = elem.querySelectorAll('.kh-r_show-tab .kh-r_tab');
        elem.parentElement.style.minHeight = elem.nextElementSibling.clientHeight + 'px';
        // nextElementSibling
        function showSelectMaterial(n) {
            if (window.innerWidth <= 576) {
                rTabContent[n].parentElement.style.height = rTabContent[n].clientHeight + 'px';
                elem.parentElement.style.height = 0;
                elem.parentElement.style.height = rTabContent[n].clientHeight + elem.nextElementSibling.clientHeight + 30 + 'px';
            }
            else if (window.innerWidth <= 992) {
                elem.style.height = rTabContent[n].clientHeight + 'px';
                elem.parentElement.style.height = 0;
                elem.parentElement.style.height = rTabContent[n].clientHeight + elem.nextElementSibling.clientHeight + 30 + 'px';
            }else if (window.innerWidth > 992) {
                elem.parentElement.style.height = rTabContent[n].clientHeight + 'px';
            }

            rTabBtn.forEach((item) => item.classList.remove('active'));
            rTabContent.forEach((item) => item.classList.remove('active'));
            rTabBtn[n].classList.add('active');
            rTabContent[n].classList.add('active');
        };
        if (document.readyState === "complate") {
            showSelectMaterial(0);
        }else {
            setTimeout(() => {
                showSelectMaterial(0)
            },500)
        }

        rTabNav.addEventListener('click', function () {
            const target = event.target;
            for (let i = 0; i < rTabBtn.length; i++) {
                if (target == rTabBtn[i]) {
                    showSelectMaterial(i);
                }
            }
        })
    }
    rTabinations.forEach((item) => runTabActivation(item));

})
