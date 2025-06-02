document.addEventListener('DOMContentLoaded', () => {
    const cars = [
        { id: "tesla", marka: "Tesla", model: "Model S Plaid 2025", snaga: "1020 KS", ubrzanje: "1.99 s", domet: "600 km", cena: "130000", tip: "Električni" },
        { id: "bmw", marka: "BMW", model: "M4 CSL 2025", snaga: "550 KS", ubrzanje: "3.7 s", domet: "N/A", cena: "140000", tip: "Sportski" },
        { id: "ford", marka: "Ford", model: "Bronco Raptor 2025", snaga: "400 KS", ubrzanje: "5.8 s", domet: "N/A", cena: "80000", tip: "SUV" },
        { id: "toyota", marka: "Toyota", model: "GR Supra 2025", snaga: "382 KS", ubrzanje: "3.9 s", domet: "N/A", cena: "55000", tip: "Sportski" },
        { id: "rivian-r1s", marka: "Rivian", model: "R1S 2025", snaga: "835 KS", ubrzanje: "3.0 s", domet: "500 km", cena: "90000", tip: "Električni SUV" },
        { id: "audi-rs6", marka: "Audi", model: "RS6 Avant 2025", snaga: "600 KS", ubrzanje: "3.5 s", domet: "N/A", cena: "120000", tip: "Sportski" },
        { id: "audi-hoonitron", marka: "Audi", model: "S1 e-tron Quattro Hoonitron", snaga: "680 KS", ubrzanje: "2.8 s", domet: "N/A", cena: "Custom", tip: "Električni" },
        { id: "audi-quattro", marka: "Audi", model: "Sport Quattro", snaga: "306 KS", ubrzanje: "4.8 s", domet: "N/A", cena: "200000", tip: "Sportski" },
        { id: "lamborghini", marka: "Lamborghini", model: "Huracán Tecnica 2025", snaga: "640 KS", ubrzanje: "3.2 s", domet: "N/A", cena: "250000", tip: "Sportski" },
        { id: "porsche", marka: "Porsche", model: "911 GT3 2025", snaga: "510 KS", ubrzanje: "3.2 s", domet: "N/A", cena: "170000", tip: "Sportski" },
        { id: "dodge", marka: "Dodge", model: "Viper ACR 2025", snaga: "650 KS", ubrzanje: "3.4 s", domet: "N/A", cena: "150000", tip: "Sportski" },
        { id: "ferrari", marka: "Ferrari", model: "Purosangue 2025", snaga: "725 KS", ubrzanje: "3.3 s", domet: "N/A", cena: "400000", tip: "SUV" },
        { id: "mclaren", marka: "McLaren", model: "Artura 2025", snaga: "680 KS", ubrzanje: "3.0 s", domet: "30 km", cena: "230000", tip: "Sportski" },
        { id: "subaru", marka: "Subaru", model: "WRX STI 2025", snaga: "310 KS", ubrzanje: "5.0 s", domet: "N/A", cena: "45000", tip: "Sportski" },
        { id: "mercedes", marka: "Mercedes", model: "AMG GT63 2025", snaga: "577 KS", ubrzanje: "3.1 s", domet: "N/A", cena: "180000", tip: "Sportski" },
        { id: "chevrolet", marka: "Chevrolet", model: "Corvette Z06 2025", snaga: "670 KS", ubrzanje: "2.6 s", domet: "N/A", cena: "120000", tip: "Sportski" },
        { id: "rivian-r1t", marka: "Rivian", model: "R1T 2025", snaga: "835 KS", ubrzanje: "3.0 s", domet: "530 km", cena: "95000", tip: "Električni SUV" },
        { id: "bugatti", marka: "Bugatti", model: "Chiron Pur Sport 2025", snaga: "1500 KS", ubrzanje: "2.3 s", domet: "N/A", cena: "3500000", tip: "Sportski" },
        { id: "volvo", marka: "Volvo", model: "EX90 2025", snaga: "510 KS", ubrzanje: "4.7 s", domet: "480 km", cena: "80000", tip: "Električni SUV" },
        { id: "alfa", marka: "Alfa Romeo", model: "Giulia Quadrifoglio 2025", snaga: "505 KS", ubrzanje: "3.8 s", domet: "N/A", cena: "85000", tip: "Sportski" }
    ];

    const car1Select = document.getElementById('car1');
    const car2Select = document.getElementById('car2');
    const comparisonTable = document.getElementById('comparisonTable');
    const car1Header = document.getElementById('car1-header');
    const car2Header = document.getElementById('car2-header');

    cars.forEach(car => {
        const option1 = document.createElement('option');
        option1.value = car.id;
        option1.textContent = `${car.marka} ${car.model}`;
        car1Select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = car.id;
        option2.textContent = `${car.marka} ${car.model}`;
        car2Select.appendChild(option2);
    });

    function updateTable() {
        const car1Id = car1Select.value;
        const car2Id = car2Select.value;

        if (car1Id && car2Id && car1Id === car2Id) {
            alert('Izaberite različite automobile!');
            car2Select.value = '';
            return;
        }

        const car1 = cars.find(car => car.id === car1Id) || null;
        const car2 = cars.find(car => car.id === car2Id) || null;

        car1Header.textContent = car1 ? `${car1.marka} ${car1.model}` : 'Prvi automobil';
        car2Header.textContent = car2 ? `${car2.marka} ${car2.model}` : 'Drugi automobil';

        const fields = ['marka', 'model', 'snaga', 'ubrzanje', 'domet', 'cena', 'tip'];
        fields.forEach(field => {
            document.getElementById(`car1-${field}`).textContent = car1 ? car1[field] : '-';
            document.getElementById(`car2-${field}`).textContent = car2 ? car2[field] : '-';
        });
    }

    car1Select.addEventListener('change', updateTable);
    car2Select.addEventListener('change', updateTable);
});