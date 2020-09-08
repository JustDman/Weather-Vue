<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link to="/" class="navbar-brand">Current Weather</router-link>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"
        data-toggle="dropdown" href="#" role="button">Predictions</a>
        <div class="dropdown-menu">
          <router-link to="/hourly" class="dropdown-item" >Hourly Predictions</router-link>
          <div class="dropdown-divider"></div>
          <router-link to="/daily" class="dropdown-item">Daily Predictions</router-link>
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
