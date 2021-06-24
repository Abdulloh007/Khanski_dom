window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 1200 && window.innerWidth >= 576) {
        const blok = document.querySelector('.kh-chart-of-payments')
        heading = blok.querySelectorAll('.kh-wrap_heading'),
        chartlist = blok.querySelector('.kh-chart_w-list'),
        docList = blok.querySelector('.kh-docs-list'),
        links = blok.querySelectorAll('.kh-event-link');

        blok.classList.add('kh-dfw');

        function colAdapter(heading, list, link) {
            const wrapEl = document.createElement('div');
            wrapEl.classList.add('kh-m_shift');
            blok.appendChild(wrapEl);
            wrapEl.appendChild(heading);
            wrapEl.appendChild(list);
            wrapEl.appendChild(link);
        }
        colAdapter(heading[0], chartlist, links[0]);
        colAdapter(heading[1], docList, links[1]);
    }
})
