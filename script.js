document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-text, .animate-button');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 300);
    });

    const cars = [
        { marka: 'Tesla', model: 'Model S Plaid', snaga: '1020 KS', ubrzanje: '2.1 s', domet: '637 km', cena: '94,990', tip: 'Električni', slika: 'Slike/tesla.jpg' },
        { marka: 'BMW', model: 'M4 CS', snaga: '543 KS', ubrzanje: '3.4 s', domet: '601 km', cena: '123,500', tip: 'Sportski', slika: 'Slike/m4cs.jpg' },
        { marka: 'Lamborghini', model: 'Huracán Tecnica', snaga: '640 KS', ubrzanje: '3.2 s', domet: '389 km', cena: '239,000', tip: 'Sportski', slika: 'Slike/20-Lamborghini-Huracan-Tecnica.jpg' },
        { marka: 'Porsche', model: '911 GT3', snaga: '502 KS', ubrzanje: '3.4 s', domet: '568 km', cena: '169,700', tip: 'Sportski', slika: 'Slike/porsche-911-gt3-rs-br.jpg' },
        { marka: 'Audi', model: 'RS e-tron GT', snaga: '637 KS', ubrzanje: '3.3 s', domet: '383 km', cena: '104,900', tip: 'Električni', slika: 'Slike/audi-rs-e-tron-gt.jpg' },
        { marka: 'Mercedes-Benz', model: 'AMG C63 S', snaga: '671 KS', ubrzanje: '3.4 s', domet: '200 km', cena: '85,000', tip: 'Hibrid', slika: 'Slike/mercedes-amg-c63-s.jpg' },
        { marka: 'Toyota', model: 'GR Supra', snaga: '382 KS', ubrzanje: '3.9 s', domet: '750 km', cena: '54,500', tip: 'Sportski', slika: 'Slike/supra.jpg' },
        { marka: 'Ford', model: 'Mustang Mach-E GT', snaga: '480 KS', ubrzanje: '3.8 s', domet: '434 km', cena: '60,500', tip: 'Električni', slika: 'Slike/ford-mustang-mach-e-gt.jpeg' },
        { marka: 'Chevrolet', model: 'Corvette Z06', snaga: '670 KS', ubrzanje: '2.6 s', domet: '561 km', cena: '112,000', tip: 'Sportski', slika: 'Slike/chevrolet-corvette-z06.jpeg' },
        { marka: 'Nissan', model: 'Z', snaga: '400 KS', ubrzanje: '4.5 s', domet: '600 km', cena: '42,210', tip: 'Sportski', slika: 'Slike/nissan-z.jpg' },
        { marka: 'Volkswagen', model: 'ID.4 Pro', snaga: '295 KS', ubrzanje: '6.2 s', domet: '418 km', cena: '45,000', tip: 'Električni', slika: 'Slike/volkswagen-id4-pro.jpg' },
        { marka: 'Hyundai', model: 'Ioniq 5 N', snaga: '641 KS', ubrzanje: '3.4 s', domet: '360 km', cena: '66,100', tip: 'Električni', slika: 'Slike/hyundai-ioniq-5-n.jpg' },
        { marka: 'Kia', model: 'EV6 GT', snaga: '576 KS', ubrzanje: '3.5 s', domet: '406 km', cena: '61,600', tip: 'Električni', slika: 'Slike/kia-ev6-gt.jpg' },
        { marka: 'Jaguar', model: 'F-Type R', snaga: '575 KS', ubrzanje: '3.7 s', domet: '650 km', cena: '103,200', tip: 'Sportski', slika: 'Slike/jaguar-f-type-r.jpg' },
        { marka: 'Lexus', model: 'LC 500', snaga: '471 KS', ubrzanje: '4.4 s', domet: '950 km', cena: '98,850', tip: 'Sportski', slika: 'Slike/lexus-lc-500.jpg' },
        { marka: 'Maserati', model: 'GranTurismo Trofeo', snaga: '550 KS', ubrzanje: '3.5 s', domet: '440 km', cena: '190,000', tip: 'Sportski', slika: 'Slike/maserati-granturismo-trofeo.jpg' },
        { marka: 'Ferrari', model: '296 GTB', snaga: '819 KS', ubrzanje: '2.9 s', domet: '25 km', cena: '321,400', tip: 'Hibrid', slika: 'Slike/ferrari-296-gtb.jpeg' },
        { marka: 'McLaren', model: 'Artura', snaga: '671 KS', ubrzanje: '3.0 s', domet: '31 km', cena: '237,500', tip: 'Hibrid', slika: 'Slike/mclaren-artura.jpg' },
        { marka: 'Aston Martin', model: 'Vantage', snaga: '656 KS', ubrzanje: '3.5 s', domet: '290 km', cena: '191,000', tip: 'Sportski', slika: 'Slike/aston-martin-vantage.jpeg' },
        { marka: 'Rivian', model: 'R1S', snaga: '835 KS', ubrzanje: '3.0 s', domet: '507 km', cena: '75,900', tip: 'Električni SUV', slika: 'Slike/Rivian.jpg' }
    ];

    const chatContainer = document.getElementById('chat-container');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendMessage = document.getElementById('send-message');
    const closeChat = document.getElementById('close-chat');
    const openChatButton = document.getElementById('open-chat');
    let conversationContext = [];
    let userPreferences = { budget: null, preferredType: null };

    openChatButton.addEventListener('click', () => {
        chatContainer.style.display = 'block';
        openChatButton.style.display = 'none';
    });

    closeChat.addEventListener('click', () => {
        chatContainer.style.display = 'none';
        openChatButton.style.display = 'block';
        conversationContext = [];
        userPreferences = { budget: null, preferredType: null };
    });

    sendMessage.addEventListener('click', () => {
        const message = chatInput.value.trim().toLowerCase();
        if (message) {
            addMessage('Korisnik: ' + chatInput.value, 'user-message', 'SLIKE/user.jpg');
            processMessage(message);
            chatInput.value = '';
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && chatInput.value.trim()) {
            sendMessage.click();
        }
    });

    function addMessage(text, className, logoSrc) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message-container');

        const logoImg = document.createElement('img');
        logoImg.classList.add('message-logo');
        logoImg.src = logoSrc || 'SLIKE/bot.jpg';
        logoImg.alt = className.includes('bot') ? 'Bot Logo' : 'User Logo';

        const textDiv = document.createElement('div');
        textDiv.classList.add('message', className);
        textDiv.textContent = text;

        messageDiv.appendChild(logoImg);
        messageDiv.appendChild(textDiv);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function processMessage(message) {
        conversationContext.push(message);
        let response = '';
        let foundCars = cars.filter(car => 
            car.marka.toLowerCase().includes(message) || 
            car.model.toLowerCase().includes(message)
        );

        // Analiza budžeta i preferencija
        const budgetMatch = message.match(/budžet (\d+)/) || message.match(/do (\d+)/);
        if (budgetMatch) {
            userPreferences.budget = parseInt(budgetMatch[1]);
        }
        if (message.includes('električni') || message.includes('suv') || message.includes('sportski') || message.includes('hibrid')) {
            userPreferences.preferredType = message.match(/(električni|suv|sportski|hibrid)/)[0];
        }

        // Inteligencija i proaktivnost
        if (message.includes('pomoć') || message.includes('pomozite')) {
            response = 'Tu sam da vam pomognem! Možete pitati o specifikacijama (npr. "Tesla Model S"), poređenju ("poredi Tesla i Porsche"), najbržem/jeftinijem modelu, ili mi date budžet/preferencije (npr. "preporuči do 60000 električni"). Šta vas zanima?';
        } else if (message.includes('najbrži')) {
            const fastest = cars.reduce((fastest, current) => 
                parseFloat(fastest.ubrzanje.replace(' s', '')) < parseFloat(current.ubrzanje.replace(' s', '')) ? fastest : current
            );
            response = `Najbrži auto je ${fastest.marka} ${fastest.model} sa ubrzanjem ${fastest.ubrzanje} i snagom ${fastest.snaga}. Ako tražite brzinu u vašem budžetu, recite mi koliko možete da potrošite!`;
        } else if (message.includes('najjeftiniji')) {
            const cheapest = cars.reduce((cheapest, current) => 
                parseFloat(cheapest.cena.replace(',', '')) < parseFloat(current.cena.replace(',', '')) ? cheapest : current
            );
            response = `Najjeftiniji model je ${cheapest.marka} ${cheapest.model} za ${cheapest.cena} evra. Želite li nešto slično u tom rangu ili bolje performanse?`;
        } else if (message.includes('poredi')) {
            const models = message.split(' ').filter(word => cars.some(car => car.model.toLowerCase().includes(word) || car.marka.toLowerCase().includes(word)));
            if (models.length >= 2) {
                const carsToCompare = cars.filter(car => models.some(model => car.model.toLowerCase().includes(model) || car.marka.toLowerCase().includes(model))).slice(0, 2);
                response = `Poređenje ${carsToCompare.map(car => car.marka + ' ' + car.model).join(' i ')}:\n`;
                carsToCompare.forEach(car => {
                    response += `- ${car.marka} ${car.model}: Snaga ${car.snaga}, Ubrzanje ${car.ubrzanje}, Domet ${car.domet}, Cena ${car.cena} evra\n`;
                });
                response += `Preporučujem ${carsToCompare[0].marka} ${carsToCompare[0].model} ako vam je važna snaga, osim ako ne favorizujete domet. Šta mislite?`;
            } else {
                response = 'Navedite dva modela za poređenje (npr. "poredi Tesla Model S i Porsche 911"). Mogu predložiti pare ako želite!';
            }
        } else if (message.includes('preporuči')) {
            const budget = userPreferences.budget || parseInt(message.match(/\d+/)) || 100000;
            const filteredCars = cars.filter(car => 
                (!userPreferences.preferredType || car.tip.toLowerCase().includes(userPreferences.preferredType)) &&
                parseFloat(car.cena.replace(',', '')) <= budget
            );
            const recommended = filteredCars.sort((a, b) => parseFloat(b.snaga.replace(' KS', '')) - parseFloat(a.snaga.replace(' KS', '')))[0];
            if (recommended) {
                response = `Preporučujem ${recommended.marka} ${recommended.model} za budžet do ${budget} evra. Specifikacije: Snaga ${recommended.snaga}, Ubrzanje ${recommended.ubrzanje}, Domet ${recommended.domet}. Idealno za ${recommended.tip.toLowerCase()}. Želite li alternativu?`;
            } else {
                response = `Nema modela u budžetu od ${budget} evra za ${userPreferences.preferredType || 'bilo koji tip'}. Povećajte budžet ili navedite drugi tip!`;
            }
        } else if (foundCars.length > 0) {
            const car = foundCars[0];
            response = `Evo detalja za ${car.marka} ${car.model}:\n- Snaga: ${car.snaga}\n- Ubrzanje: ${car.ubrzanje}\n- Domet: ${car.domet}\n- Cena: ${car.cena} evra\n- Tip: ${car.tip}\n`;
            if (conversationContext.includes('detalji') || message.includes('detalji')) {
                response += `Dodatno: Ovaj model excelira u ${car.tip === 'Električni' ? 'ekonomiji i tihoj vožnji' : car.tip === 'Sportski' ? 'dinamičnosti na stazi' : 'hibridnoj efikasnosti'}. Idealno za ${car.domet > 500 ? 'duga putovanja' : 'kratke ture'}.`;
            }
            response += `Želite li poređenje sa nekim drugim modelom ili savet prema vašem budžetu?`;
        } else if (message.includes('kontakt')) {
            response = 'Kontaktirajte nas na +381 123 456 789 ili info@automagazin.rs. Ako imate pitanje o autima, mogu odmah pomoći – recite mi šta vam treba!';
        } else if (message.includes('novosti')) {
            response = 'Najnovije vesti su na stranici Novosti, sa fokusom na električne modele. Želite li preporuku električnog auta ili detalje o nekom modelu?';
        } else {
            response = `Nisam potpuno siguran šta mislite na "${message}". Možda ste mislili na određeni model, budžet (npr. "do 50000"), ili tip (npr. "sportski")? Predlažem ${cars[0].marka} ${cars[0].model} kao početak – želite li detalje?`;
        }

        addMessage('Bot: ' + response, 'bot-message', 'SLIKE/bot.jpg');
    }

    addMessage('Bot: Zdravo! Ja sam vaš ultra-pametni Auto Magazin bot. Mogu da analiziram vaše želje, preporučim automobile po budžetu ili tipu, poredim modele, i pružim duboke uvide. Šta vas zanima – model, brzinu, cenu, ili nešto drugo? (07:00 PM, 25.06.2025)', 'bot-message', 'SLIKE/bot.jpg');

    chatContainer.style.display = 'none';
});
