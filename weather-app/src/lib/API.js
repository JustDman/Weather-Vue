import config from '@/assets/config';

/* eslint-disable-next-line */
const APP_ID = config.APP_ID;
const lat = '47.529250';
const lon = '12.249650';
const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`;

function getForecast() {
  return fetch(API_URL)
    .then((response) => response.json());
}

export default {
  getForecast,
};
