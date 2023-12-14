<template>
  <div class="card">
    <h2>{{ person.name }}</h2>
    <img :src="person.img" />
    <p>Ålder: {{ person.age }}</p>
    <p>Email: {{ person.email }}</p>
    <p>Jobs: {{ person.jobs }}</p>
    <p>Hobby: {{ person.hobby }}</p>
    <button @click="handleButtonClick">
      <slot>{{ showDetails }}</slot>
    </button>
    <div v-if="showDetails">
      <p>"{{ person.desc }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDetails: false
    }
  },
  methods: {
    handleButtonClick() {
      this.showDetails = !this.showDetails
      this.$emit('person-clicked', this.person)
    }
  }
}
</script>

<style scoped>
.card {
  background-color: rgb(199, 199, 230);
  padding: 10px 20px;
}
.card h2 {
  text-align: center;
}
</style>
