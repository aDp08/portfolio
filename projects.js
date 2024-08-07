document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const moreInfo = card.querySelector('.more-info');
            if (moreInfo.style.display === 'block') {
                moreInfo.style.display = 'none';
            } else {
                projectCards.forEach(c => {
                    c.querySelector('.more-info').style.display = 'none';
                });
                moreInfo.style.display = 'block';
            }
        });
    });
});
