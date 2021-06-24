window.addEventListener('DOMContentLoaded', function () {
    // popUps
    const popUpBtns = document.querySelectorAll('#pop-video'),
    popUps = document.querySelectorAll('.kh-video-pop_up');

    popUpBtns.forEach((item) =>  popUper(item));
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
    };

    //Tabs Glob
    const globTabination = document.querySelector('.kh-glob-tabination');

    function globTabinationAct(elem) {
        const globTabNav = elem.querySelectorAll('.kh-glob-nav'),
        globTabBtn = elem.querySelectorAll('.kh-glob-btn'),
        globTab = elem.querySelectorAll('.kh-glob-tab'),
        backMobBtn = document.createElement('i');
        backMobBtn.classList.add('far', 'fa-arrow-left', 'kh-back-mob', 'kh-btn_red');
        globTabNav.forEach((item) => {
            item.addEventListener('click', function () {
                const target = event.target,
                parent = target.parentElement;
                for (let i = 0; i < globTabBtn.length; i++) {
                    if (target == globTabBtn[i] || parent == globTabBtn[i] || parent.parentElement == globTabBtn[i]) {
                        tabAction(i);
                    }
                }
            });
        });
        if (window.innerWidth >= 576) {
            tabAction(0);
        }
        function tabAction(n){
            globTab.forEach((item) => item.classList.remove('active'));
            globTabBtn.forEach((item) => item.classList.remove('active'));
            globTab[n].classList.add('active');
            globTabBtn[n].classList.add('active');
            if (window.innerWidth <= 576) {
                globTab[n].prepend(backMobBtn)
            }
        }
        backMobBtn.addEventListener('click', function () {
            globTabBtn.forEach((item) => item.classList.remove('active'));
            globTab.forEach((item) => item.classList.remove('active'));
        })
    };
    globTabinationAct(globTabination);


    //Just Tabination ;)
    const jTabination = document.querySelectorAll('.kh-j_tabination');

    function justTabAct(elem) {
        const jNav = elem.querySelector('.kh-j_nav'),
        jBtn = jNav.querySelectorAll('.kh-j_btn'),
        jTab = elem.querySelectorAll('.kh-j_tab');

        jNav.addEventListener('click', function () {
            const target = event.target,
            parent = target.parentElement;
            for (let i = 0; i < jBtn.length; i++) {
                if (target == jBtn[i] || parent == jBtn[i]) {
                    jTabAction(i);
                }
            }
        });
        jTabAction(0)
        function jTabAction(n){
            jTab.forEach((item) => item.classList.remove('active'));
            jTab[n].classList.add('active');
            jBtn.forEach((item) => item.classList.remove('active'));
            jBtn[n].classList.add('active');
        }
    }
    jTabination.forEach((item) => justTabAct(item));
});
