<template>
  <div class="base-layout">
    <header>
      <slot name="header"> </slot>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <slot name="footer"> </slot>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Din CSS-styling för baslayouten */
.base-layout {
  display: flex;
  flex-direction: column;
  background-color: rgb(199, 199, 230);
  width: 300px;
}
header,
footer {
  background-color: #333;
  color: white;
  padding: 20px;
}
</style>
