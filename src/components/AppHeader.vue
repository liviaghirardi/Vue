<script setup>
const links = [
  { texto: 'Recursos', ancora: '#recursos' },
  { texto: 'Começar', ancora: '#comecar' },
]
</script>

<template>
  <header class="navbar">
    <div class="conteudo">
      <a class="marca" href="#">projeto-vue</a>
      <nav>
        <a v-for="link in links" :key="link.ancora" :href="link.ancora">{{ link.texto }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(10, 20, 17, 0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--borda);
}

.conteudo {
  max-width: var(--largura);
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.marca {
  font-weight: 800;
  color: var(--texto-forte);
  text-decoration: none;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: var(--texto);
  text-decoration: none;
}

nav a:hover {
  color: var(--texto-forte);
}
</style>
