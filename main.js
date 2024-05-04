document.querySelectorAll('.rating').forEach(function(rating) {
    const stars = rating.querySelectorAll('.star');

    stars.forEach(function(star) {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            const gameRating = rating.getAttribute('data-rating');

            if (gameRating !== value.toString()) {
                rating.setAttribute('data-rating', value);
            } else {
                rating.setAttribute('data-rating', '0');
            }

            stars.forEach(function(s) {
                const sValue = parseInt(s.getAttribute('data-value'));
                if (sValue <= value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
});
