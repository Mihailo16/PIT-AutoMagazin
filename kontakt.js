document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const ime = document.getElementById('ime').value.trim();
    const email = document.getElementById('email').value.trim();
    const poruka = document.getElementById('poruka').value.trim();

    if (ime && email && poruka) {
        alert('Poruka uspešno poslata! Hvala što ste nas kontaktirali.');
        e.target.reset();
    } else {
        alert('Molimo popunite sva polja.');
    }
});