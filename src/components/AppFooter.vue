<script setup>
const ano = new Date().getFullYear()
</script>

<template>
  <footer>
    <p>© {{ ano }} · Lívia Ghirardi · Frameworks Front-end (SENAI) · Feito com Vue.js</p>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--borda);
  padding: 24px 20px;
  text-align: center;
  font-size: 0.9rem;
}

p {
  margin: 0;
}
</style>
