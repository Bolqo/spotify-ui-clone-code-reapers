const filterBtns = document.querySelectorAll('.filters__btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('filters__btn--active'));
        btn.classList.add('filters__btn--active');

        const selected = btn.textContent.toLowerCase();

        cards.forEach(card => {
            const show = selected === 'all' || card.dataset.category === selected;

            if (show) {
                card.style.display = '';
                // Small delay so display change renders before opacity transition starts
                requestAnimationFrame(() => card.classList.remove('hidden'));
            } else {
                card.classList.add('hidden');
                // Wait for fade-out to finish, then remove from layout
                card.addEventListener('transitionend', () => {
                    if (card.classList.contains('hidden')) card.style.display = 'none';
                }, { once: true });
            }
        });
    });
});