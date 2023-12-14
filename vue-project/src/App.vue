<!-- App.vue -->
<template>
  <div class="container">
    <BaseLayout>
      <template v-slot:header><h1>Person Card</h1> </template>
      <template v-slot:footer><p>&copy; 2023 My Vue App</p></template>
      <div v-for="(person, index) in personDataList" :key="index">
        <Card :person="person" @person-clicked="logClickedPerson">
          <p>Mer om {{ person.name }}</p>
        </Card>
      </div>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue'
import Card from './components/Card.vue'

export default {
  components: {
    Card,
    BaseLayout
  },
  data() {
    return {
      personDataList: [
        {
          name: 'Tuan',
          img: './assets/profile_bild.jpg',
          age: 28,
          email: 'Tuan@hotmail.com',
          jobs: 'Developer',
          hobby: 'sport',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo officia necessitatibus, fugit harum cumque hic aspernatur reiciendis maxime temporibus voluptatum reprehenderit omnis earum sint facilis? Error sint vel illo corporis?'
        }
      ]
    }
  },
  methods: {
    logClickedPerson(person) {
      console.log(`Klickade på: ${person.name}`)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
