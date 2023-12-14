<template>
  <h1>User page</h1>
  <div class="item" v-for="user in users" :key="user.id">
    <router-link :to="{ name: 'users-details-page', params: { id: user.id } }">{{
      user.name
    }}</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    const PrintData = async () => {
      try {
        const res = await fetch('http://localhost:3000/Users')
        const data = await res.json()
        this.users = data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    PrintData()
  }
}
</script>
