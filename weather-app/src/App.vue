<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="http://localhost:8080/#/">Current Weather</a>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"
        data-toggle="dropdown" href="#" role="button">Predictions</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="http://localhost:8080/#/hourly">Hourly Predictions</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="http://localhost:8080/#/daily">Daily Predictions</a>
        </div>
      </li>
        </ul>
      </div>
    </nav>
    <main class="container mt-2">
      <router-view />
    </main>
  </div>
</template>
