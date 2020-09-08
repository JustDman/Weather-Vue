<template>
  <div class="daily">
    <div class="row">
      <div class="col-8 offset-2">
        <div class="input-group mb-3">
          <input v-on:keyup="enterButtonPress" v-model="location" type="text" class="form-control"
            placeholder="Enter Location">
          <div class="input-group-append">
            <button @click="updateLocation" class="btn btn-outline-secondary" type="button">
              Search</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-6 text-center" v-for="(daily, count) in forecast.daily"
        v-bind:key="daily.weather.icon">
        <div class="card text-white bg-secondary mb-3">
          <div class="card-header">Weather in {{address.name}} in {{count}} days.</div>
          <div class="card-body">
            <h4 class="card-title" v-for="weather in daily.weather" v-bind:key="weather.main">
              {{weather.main}}
            </h4>
            <p class="card-text icon-temp" v-for="weather in daily.weather"
              v-bind:key="weather.description">
              {{weather.description}}<br />
              min temp: {{daily.temp.min}} ℃<br />
              max temp: {{daily.temp.max}} ℃<br />
            </p>
            <p class="card-text" v-for="weather in daily.weather" v-bind:key="weather.icon">
              <img :src=icons[weather.icon]>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      location: localStorage.location || '',
      forecast: null,
      address: localStorage.address || '',
      icons: {
        '01d': 'http://openweathermap.org/img/wn/01d@4x.png',
        '02d': 'http://openweathermap.org/img/wn/02d@4x.png',
        '03d': 'http://openweathermap.org/img/wn/03d@4x.png',
        '04d': 'http://openweathermap.org/img/wn/04d@4x.png',
        '09d': 'http://openweathermap.org/img/wn/09d@4x.png',
        '10d': 'http://openweathermap.org/img/wn/10d@4x.png',
        '11d': 'http://openweathermap.org/img/wn/11d@4x.png',
        '13d': 'http://openweathermap.org/img/wn/13d@4x.png',
        '50d': 'http://openweathermap.org/img/wn/50d@4x.png',
        '01n': 'http://openweathermap.org/img/wn/01n@4x.png',
        '02n': 'http://openweathermap.org/img/wn/02n@4x.png',
        '03n': 'http://openweathermap.org/img/wn/03n@4x.png',
        '04n': 'http://openweathermap.org/img/wn/04n@4x.png',
        '09n': 'http://openweathermap.org/img/wn/09n@4x.png',
        '10n': 'http://openweathermap.org/img/wn/10n@4x.png',
        '11n': 'http://openweathermap.org/img/wn/11n@4x.png',
        '13n': 'http://openweathermap.org/img/wn/13n@4x.png',
        '50n': 'http://openweathermap.org/img/wn/50n@4x.png',
      },
    };
  },
  mounted() {
    this.loadWeather(localStorage.lat || '47.53', localStorage.lon || '12.25');
  },
  methods: {
    loadWeather(lat, lon) {
      localStorage.lat = lat;
      localStorage.lon = lon;
      API.getAddress(lat, lon)
        .then((result) => {
          this.address = result;
          localStorage.address = this.address;
        });
      API.getForecast(lat, lon)
        .then((result) => {
          this.forecast = result;
        });
    },
    updateLocation() {
      localStorage.location = this.location;
      API.getCoords(this.location)
        .then((result) => {
          this.loadWeather(result.latitude, result.longitude);
        });
    },
    enterButtonPress(e) {
      if (e.keyCode === 13) {
        this.updateLocation();
      }
    },
  },
};
</script>

<style>

body {
  font-size: 2em;
}

.icon-temp {
  font-size: 2em;
}

</style>
