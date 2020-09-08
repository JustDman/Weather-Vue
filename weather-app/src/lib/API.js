/* eslint-disable-next-line */
import config from '@/assets/config';

/* eslint-disable-next-line */
const APP_ID = config.APP_ID;
const proxy = 'https://cors-anywhere.herokuapp.com/';
const WEATHER_API_URL = `${proxy}https://api.openweathermap.org/data/2.5/onecall?`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;

function getCoords(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then((response) => response.json());
}

function getForecast(lat, lon) {
  return fetch(`${WEATHER_API_URL}lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`)
    .then((response) => response.json());
}

function getAddress(lat, lon) {
  return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lon}`)
    .then((response) => response.json());
}

export default {
  getForecast,
  getCoords,
  getAddress,
};
