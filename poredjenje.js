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

document.addEventListener('DOMContentLoaded', () => {
    const car1Select = document.getElementById('car1');
    const car2Select = document.getElementById('car2');

    cars.forEach(car => {
        const option = document.createElement('option');
        option.value = car.marka + ' ' + car.model;
        option.textContent = car.marka + ' ' + car.model;
        car1Select.appendChild(option.cloneNode(true));
        car2Select.appendChild(option);
    });

    function updateComparison() {
        const car1Value = car1Select.value;
        const car2Value = car2Select.value;

        const car1 = cars.find(car => car.marka + ' ' + car.model === car1Value) || {};
        const car2 = cars.find(car => car.marka + ' ' + car.model === car2Value) || {};

        document.getElementById('car1-header').textContent = car1Value || 'Prvi automobil';
        document.getElementById('car2-header').textContent = car2Value || 'Drugi automobil';

        document.getElementById('car1-marka').textContent = car1.marka || '-';
        document.getElementById('car2-marka').textContent = car2.marka || '-';
        document.getElementById('car1-model').textContent = car1.model || '-';
        document.getElementById('car2-model').textContent = car2.model || '-';
        document.getElementById('car1-snaga').textContent = car1.snaga || '-';
        document.getElementById('car2-snaga').textContent = car2.snaga || '-';
        document.getElementById('car1-ubrzanje').textContent = car1.ubrzanje || '-';
        document.getElementById('car2-ubrzanje').textContent = car2.ubrzanje || '-';
        document.getElementById('car1-domet').textContent = car1.domet || '-';
        document.getElementById('car2-domet').textContent = car2.domet || '-';
        document.getElementById('car1-cena').textContent = car1.cena || '-';
        document.getElementById('car2-cena').textContent = car2.cena || '-';
        document.getElementById('car1-tip').textContent = car1.tip || '-';
        document.getElementById('car2-tip').textContent = car2.tip || '-';

        const car1Image = document.getElementById('car1-image');
        const car2Image = document.getElementById('car2-image');
        if (car1.slika) {
            car1Image.src = car1.slika;
            car1Image.style.display = 'block';
            car1Image.alt = car1.marka + ' ' + car1.model;
        } else {
            car1Image.src = '';
            car1Image.style.display = 'none';
        }
        if (car2.slika) {
            car2Image.src = car2.slika;
            car2Image.style.display = 'block';
            car2Image.alt = car2.marka + ' ' + car2.model;
        } else {
            car2Image.src = '';
            car2Image.style.display = 'none';
        }
    }

    car1Select.addEventListener('change', updateComparison);
    car2Select.addEventListener('change', updateComparison);
});