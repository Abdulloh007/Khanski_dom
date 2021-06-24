window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const acordWrap = document.querySelectorAll('.kh-acord-wrap');

    function activeAcord(elem) {
        const acordContent = elem.querySelector('.kh-ac-content'),
        acordBtn = elem.querySelector('.kh-ac-btn');
        acordContent.style.height = acordContent.children[0].clientHeight + 30 + 'px';

        acordBtn.addEventListener('click', function(){
            if (this.classList.contains('active')) {
                acordContent.style.height = acordContent.children[0].clientHeight + 30 + 'px';
                acordBtn.style.height = acordContent.children[0].clientHeight + 30 + 'px';
            }
            else {
                acordContent.style.height = '';
                acordBtn.style.height = '';
            }
            this.classList.toggle('active');
            acordContent.classList.toggle('active');

        });
    }
    acordWrap.forEach((item) => activeAcord(item));

});
