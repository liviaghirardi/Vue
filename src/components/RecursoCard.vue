<script setup>
const props = defineProps({
  recurso: { type: Object, required: true },
  aberto: { type: Boolean, default: false },
})

// Avisa o componente pai que o card foi clicado
const emit = defineEmits(['alternar'])
</script>

<template>
  <article class="card" :class="{ aberto }">
    <span class="categoria">{{ recurso.categoria }}</span>
    <h3>{{ recurso.titulo }}</h3>
    <p>{{ recurso.resumo }}</p>

    <div v-if="aberto" class="detalhe">
      <p>{{ recurso.detalhe }}</p>
      <code>{{ recurso.exemplo }}</code>
    </div>

    <button @click="emit('alternar', props.recurso.id)">
      {{ aberto ? 'Fechar ↑' : 'Ver detalhes →' }}
    </button>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background: var(--cartao);
  border: 1px solid var(--borda);
  border-radius: 14px;
  transition: border-color 0.2s, transform 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  border-color: #2f5a49;
}

.card.aberto {
  border-color: var(--destaque);
}

.categoria {
  color: var(--destaque);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

h3 {
  margin: 0;
  color: var(--texto-forte);
  font-size: 1.15rem;
}

p {
  margin: 0;
}

.detalhe {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px solid var(--borda);
}

code {
  display: block;
  padding: 10px 12px;
  border-radius: 8px;
  background: #06100c;
  color: var(--destaque);
  font-size: 0.82rem;
  overflow-x: auto;
  white-space: pre;
}

button {
  align-self: flex-start;
  margin-top: 4px;
  padding: 0;
  font: inherit;
  font-weight: 700;
  color: var(--texto-forte);
  background: none;
  border: none;
  cursor: pointer;
}

button:hover {
  color: var(--destaque);
}
</style>
