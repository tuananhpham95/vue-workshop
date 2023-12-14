<template>
  <nav class="nav">
    <router-link :to="{ name: 'home-page' }">Home</router-link>
    <router-link :to="{ name: 'about-page' }">About</router-link>
    <router-link :to="{ name: 'movies-page' }">Movies</router-link>
    <router-link :to="{ name: 'users-page' }">User</router-link>
  </nav>
</template>
