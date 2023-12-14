<template>
  <div v-if="user">
    <h1>user detail page</h1>
    <h3>ID: {{ $route.params.id }}</h3>
    <h3>Name :{{ user.name }}</h3>
    <h3>Age: {{ user.age }}</h3>
  </div>
  <div v-else>LOADING ...</div>
</template>

<script>
export default {
  data() {
    return {
      user: null
    }
  },
  created() {
    const PrintData = async () => {
      try {
        const res = await fetch('http://localhost:3000/Users/' + this.$route.params.id)
        const data = await res.json()
        this.user = data
        console.log(this.user)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    PrintData()
  }
}
</script>
