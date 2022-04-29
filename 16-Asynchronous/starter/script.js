'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const displayCountry = (data, className = '') => {
  const [currency] = Object.keys(data.currencies);
  const { name: currencyName } = data.currencies[currency];

  const [lang] = Object.keys(data.languages);

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1_000_000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[lang]}</p>
      <p class="country__row"><span>💰</span>${currencyName}</p>
    </div>
  </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbours = country => {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', () => {
    const [data] = JSON.parse(request.responseText);

    displayCountry(data);

    const neighbours = data.borders;

    neighbours?.forEach(country => {
      const request2 = new XMLHttpRequest();

      request2.open('GET', `https://restcountries.com/v3.1/alpha/${country}`);
      request2.send();

      request2.addEventListener('load', () => {
        const [neighbourData] = JSON.parse(request2.responseText);
        console.log(neighbourData);
        displayCountry(neighbourData, 'neighbour');
      });
    });
  });
};

// getCountryAndNeighbours('maldives');
// getCountryAndNeighbours('sweden');
getCountryAndNeighbours('china');
