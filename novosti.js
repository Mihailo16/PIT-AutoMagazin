document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.btn-group button');
    const cards = document.querySelectorAll('.col-md-4');

    function filterCards(marka, tip) {
        cards.forEach(card => {
            const cardMarka = card.getAttribute('data-marka');
            const cardTip = card.getAttribute('data-tip');
            const showCard = (marka === 'Svi' || marka === cardMarka) && (tip === 'Svi' || tip === cardTip);
            card.style.display = showCard ? '' : 'none';
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const group = button.parentElement;
            group.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const marka = document.querySelector('.btn-group[data-filter-type="marka"] .active')?.getAttribute('data-value') || 'Svi';
            const tip = document.querySelector('.btn-group[data-filter-type="tip"] .active')?.getAttribute('data-value') || 'Svi';
            filterCards(marka, tip);
        });
    });

    filterCards('Svi', 'Svi');
});