<script setup>
// Dados recebidos do componente pai (App.vue)
defineProps({
  titulo: { type: String, required: true },
  subtitulo: { type: String, default: '' },
})
</script>

<template>
  <section class="hero">
    <div class="conteudo">
      <p class="etiqueta">Projeto 02 · Vue.js</p>
      <h1>{{ titulo }}</h1>
      <p v-if="subtitulo" class="subtitulo">{{ subtitulo }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background:
    radial-gradient(circle at 15% 20%, rgba(66, 184, 131, 0.3), transparent 45%),
    radial-gradient(circle at 85% 0%, rgba(53, 73, 94, 0.5), transparent 45%);
  border-bottom: 1px solid var(--borda);
}

.conteudo {
  max-width: var(--largura);
  margin: 0 auto;
  padding: 72px 20px 64px;
}

.etiqueta {
  margin: 0 0 12px;
  color: var(--destaque);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  line-height: 1.05;
  color: var(--texto-forte);
}

.subtitulo {
  max-width: 620px;
  margin: 20px 0 0;
  font-size: 1.1rem;
}
</style>
