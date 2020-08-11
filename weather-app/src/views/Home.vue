<template>
  <div class="home">
    <div class="row">
      <div class="col-8 offset-2">
        <div class="input-group mb-3">
          <input v-model="location" type="text" class="form-control" placeholder="Enter Location">
          <div class="input-group-append">
              <button @click="updateLocation" class="btn btn-outline-secondary" type="button">
                Search</button>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2 text-center" v-if="forecast">
        <div class="card text-white bg-secondary mb-3">
          <div class="card-header">Current Weather in {{address.name}} {{address.street}}</div>
          <div class="card-body">
            <h4 v-for="current in forecast.current.weather" v-bind:key="current.main"
            class="card-title">
              {{current.main}}
            </h4>
            <p v-for="current in forecast.current.weather" v-bind:key="current.description"
            class="card-text icon-temp">
              {{current.description}}<br/>
              {{forecast.current.temp}} ℃
              </p>
            <p class="card-text" v-for="current in forecast.current.weather"
            v-bind:key="current.icon">
            <img :src=icons[current.icon]>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      location: '',
      forecast: null,
      address: '',
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
    this.loadWeather('47.53', '12.25');
  },
  methods: {
    loadWeather(lat, lon) {
      API.getAddress(lat, lon)
        .then((result) => {
          this.address = result;
        });
      API.getForecast(lat, lon)
        .then((result) => {
          this.forecast = result;
        });
    },
    updateLocation() {
      API.getCoords(this.location)
        .then((result) => {
          this.loadWeather(result.latitude, result.longitude);
        });
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
