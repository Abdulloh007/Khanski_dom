window.addEventListener('DOMContentLoaded', function () {
    const popUpBtns = document.querySelectorAll('.kh-pop_up-btn'),
    popUps = document.querySelectorAll('.kh-pop_up-wrap');




    popUpBtns.forEach((item) =>  popUper(item));
    console.log(popUpBtns[0].id);
    function popUper(elem) {
        popUps.forEach((item) => {
            const closeBtn = item.querySelector('.fa-close');
            closeBtn.addEventListener('click', function () {
                item.classList.toggle('active');
            })
        });
        elem.addEventListener('click', function () {
            for (let i = 0; i < popUps.length; i++) {
                if (elem.id == popUps[i].dataset.target) {
                    popUps[i].classList.toggle('active');
                }
            }
        })

    }
});
