//READY HOUSES MEDIA
    const readyHouses = document.querySelector('.kh-ready_houses-slider'),
    rhItems = readyHouses.querySelectorAll('.kh-r_slide'),
    showMore = document.querySelector('.kh-link_all').cloneNode(true);
    showMore.innterText = 'Показать ещё';
    if (window.innerWidth <= 576) {
        readyHouses.classList.remove('kh-ready_houses-slider');
        rhItems.forEach((item) => readyHouses.appendChild(item));
        readyHouses.appendChild(showMore);
    }
