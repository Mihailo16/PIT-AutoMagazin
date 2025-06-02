const cars = [
    { marka: 'Tesla', model: 'Model S Plaid', snaga: '1020 KS', ubrzanje: '2.1 s', domet: '637 km', cena: '94,990', tip: 'Električni', slika: 'https://ev-database.org/img/auto/Tesla_Model_S_2021/Tesla_Model_S_2021-01@2x.jpg' },
    { marka: 'BMW', model: 'M4 CS', snaga: '543 KS', ubrzanje: '3.4 s', domet: '601 km', cena: '123,500', tip: 'Sportski', slika: 'https://mediapool.bmwgroup.com/cache/P9/202404/P90548561/P90548561-the-all-new-bmw-m4-cs-05-2024-2250px.jpg' },
    { marka: 'Lamborghini', model: 'Huracán Tecnica', snaga: '640 KS', ubrzanje: '3.2 s', domet: '389 km', cena: '239,000', tip: 'Sportski', slika: 'https://www.topgear.com/sites/default/files/2022/06/20-Lamborghini-Huracan-Tecnica.jpg' },
    { marka: 'Porsche', model: '911 GT3', snaga: '502 KS', ubrzanje: '3.4 s', domet: '568 km', cena: '169,700', tip: 'Sportski', slika: 'https://mediaassets.pca.org/pages/pca/images/content/298379_6000x4500.jpg' },
    { marka: 'Audi', model: 'RS e-tron GT', snaga: '637 KS', ubrzanje: '3.3 s', domet: '383 km', cena: '104,900', tip: 'Električni', slika: 'https://www.motorweek.org/images/road_tests/2023_Audi_RS_etron_GT_Icon.jpg' },
    { marka: 'Mercedes-Benz', model: 'AMG C63 S', snaga: '671 KS', ubrzanje: '3.4 s', domet: '200 km', cena: '85,000', tip: 'Hibrid', slika: 'https://cdn-fastly.autoguide.com/media/2023/06/07/12316933/2017-mercedes-amg-c63-s-coupe-review.jpg?size=720x845&nocrop=1' },
    { marka: 'Toyota', model: 'GR Supra', snaga: '382 KS', ubrzanje: '3.9 s', domet: '750 km', cena: '54,500', tip: 'Sportski', slika: 'https://www.toyota-centar.rs/media/1915/header_tcm-3038-1878350.jpg' },
    { marka: 'Ford', model: 'Mustang Mach-E GT', snaga: '480 KS', ubrzanje: '3.8 s', domet: '434 km', cena: '60,500', tip: 'Električni', slika: 'https://cdn.motor1.com/images/mgl/Vz81kz/s1/2022-ford-mustang-mach-e-gt-exterior.jpg' },
    { marka: 'Chevrolet', model: 'Corvette Z06', snaga: '670 KS', ubrzanje: '2.6 s', domet: '561 km', cena: '112,000', tip: 'Sportski', slika: 'https://www.motortrend.com/uploads/2023/01/2023-Chevrolet-Corvette-Z06-4.jpg' },
    { marka: 'Nissan', model: 'Z', snaga: '400 KS', ubrzanje: '4.5 s', domet: '600 km', cena: '42,210', tip: 'Sportski', slika: 'https://media.ed.edmunds-media.com/nissan/z/2025/oem/2025_nissan_z_coupe_nismo_fq_oem_1_1280.jpg' },
    { marka: 'Volkswagen', model: 'ID.4 Pro', snaga: '295 KS', ubrzanje: '6.2 s', domet: '418 km', cena: '45,000', tip: 'Električni', slika: 'https://www.volkswagen.rs/dam/images/962c9ddaf064fd9f181947a46068c2ef0d0c53b5/76181ca7fd1bed88ed91ef10c228f86b/cba8d325-144d-434e-811d-137bf39c6633/crop:SMART/resize:3840:2160/vw-id-4-pro-210-kw-konfigurieren-volkswagen-oesterreich-mozilla-firefox-000138.png' },
    { marka: 'Hyundai', model: 'Ioniq 5 N', snaga: '641 KS', ubrzanje: '3.4 s', domet: '360 km', cena: '66,100', tip: 'Električni', slika: 'https://external-preview.redd.it/2025-hyundai-ioniq-5-n-first-drive-v0-ibQLug7ER1kWdN4uDX2oIAdgfmzE8I0z8gTNndmU0tE.jpg?width=1080&crop=smart&auto=webp&s=87f21e48085c362a6801a8e5cc0b76e2e6b4c2e4' },
    { marka: 'Kia', model: 'EV6 GT', snaga: '576 KS', ubrzanje: '3.5 s', domet: '406 km', cena: '61,600', tip: 'Električni', slika: 'https://ev-database.org/img/auto/Kia_EV6_GT_2021/Kia_EV6_GT_2021-01@2x.jpg' },
    { marka: 'Jaguar', model: 'F-Type R', snaga: '575 KS', ubrzanje: '3.7 s', domet: '650 km', cena: '103,200', tip: 'Sportski', slika: 'https://www.motortrend.com/uploads/sites/5/2016/02/2016-Jaguar-F-Type-AWD-R-Coupe-front-three-quarter-in-motion.jpg' },
    { marka: 'Lexus', model: 'LC 500', snaga: '471 KS', ubrzanje: '4.4 s', domet: '950 km', cena: '98,850', tip: 'Sportski', slika: 'https://toyotacanada.scene7.com/is/image/toyotacanada/lexus-2025-lc-500-hero-caviar-x?fit=constrain&wid=1914' },
    { marka: 'Maserati', model: 'GranTurismo Trofeo', snaga: '550 KS', ubrzanje: '3.5 s', domet: '440 km', cena: '190,000', tip: 'Sportski', slika: 'https://www.topgear.com/sites/default/files/2023/02/Maserati%20GranTurismo%20Trofeo%20Rosso%20GranTurismo%20%2812%29.jpg' },
    { marka: 'Ferrari', model: '296 GTB', snaga: '819 KS', ubrzanje: '2.9 s', domet: '25 km', cena: '321,400', tip: 'Hibrid', slika: 'https://content.homenetiol.com/2000292/2126067/0x0/69a4707ca04845e19c820598ca496a13.jpg' },
    { marka: 'McLaren', model: 'Artura', snaga: '671 KS', ubrzanje: '3.0 s', domet: '31 km', cena: '237,500', tip: 'Hibrid', slika: 'https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-141-1655218129.jpg?crop=0.622xw:0.524xh;0.378xw,0.430xh&resize=2048:*' },
    { marka: 'Aston Martin', model: 'Vantage', snaga: '656 KS', ubrzanje: '3.5 s', domet: '290 km', cena: '191,000', tip: 'Sportski', slika: 'https://www.astonmartin.com/-/media/models---vantage-coupe/exterior/scrollable/desktop/04_ngv-exterior-desktop.jpg?rev=75b2bc50a29c402cadaa33562ee4fe25' },
    { marka: 'Rivian', model: 'R1S', snaga: '835 KS', ubrzanje: '3.0 s', domet: '507 km', cena: '75,900', tip: 'Električni', slika: 'https://cdn.sanity.io/images/a78j5o5y/production/62700368a77845dfb4d7326f3ff83a8933e0ce80-2560x1707.jpg?rect=0,135,2560,1438&w=1310&h=736&auto=format' }
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