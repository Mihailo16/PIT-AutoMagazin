document.querySelector('.contact-form').addEventListener('submit', async (e) => {
    e.preventDefault(); 
    const ime = document.getElementById('ime').value.trim();
    const email = document.getElementById('email').value.trim();
    const poruka = document.getElementById('poruka').value.trim();
    const messageDiv = document.getElementById('form-message');

    if (!ime || !email || !poruka) {
        messageDiv.className = 'alert alert-danger';
        messageDiv.textContent = 'Molimo popunite sva polja.';
        messageDiv.classList.remove('d-none');
        return;
    }

    try {
        const response = await fetch('https://formspree.io/f/xqabkpwn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ime, email, poruka }),
        });

        if (response.ok) {
            messageDiv.className = 'alert alert-success';
            messageDiv.textContent = 'Poruka uspešno poslata! Hvala što ste nas kontaktirali.';
            messageDiv.classList.remove('d-none');
            e.target.reset(); 
        } else {
            messageDiv.className = 'alert alert-danger';
            messageDiv.textContent = 'Došlo je do greške. Pokušajte ponovo.';
            messageDiv.classList.remove('d-none');
        }
    } catch (error) {
        messageDiv.className = 'alert alert-danger';
        messageDiv.textContent = 'Došlo je do greške. Pokušajte ponovo.';
        messageDiv.classList.remove('d-none');
    }
});