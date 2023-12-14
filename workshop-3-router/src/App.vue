<script lang="ts">
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<template>
  <div>
    <header>
      <nav><NavBar /></nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
nav {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}
</style>
