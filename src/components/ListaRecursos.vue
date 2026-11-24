<script setup>
import { computed, ref } from 'vue'
import { CATEGORIAS, RECURSOS } from '../data/recursos'
import RecursoCard from './RecursoCard.vue'

// Estado reativo: categoria escolhida e card aberto
const filtro = ref(null)
const aberto = ref(null)

// Lista derivada: recalculada quando o filtro muda
const filtrados = computed(() =>
  filtro.value ? RECURSOS.filter((r) => r.categoria === filtro.value) : RECURSOS,
)

function selecionar(categoria) {
  filtro.value = categoria
  aberto.value = null
}

function alternar(id) {
  aberto.value = aberto.value === id ? null : id
}
</script>

<template>
  <section id="recursos" class="recursos">
    <h2>Explore os recursos</h2>

    <div class="filtros">
      <button :class="{ ativo: filtro === null }" @click="selecionar(null)">Todos</button>
      <button
        v-for="categoria in CATEGORIAS"
        :key="categoria"
        :class="{ ativo: filtro === categoria }"
        @click="selecionar(categoria)"
      >
        {{ categoria }}
      </button>
    </div>

    <p class="contador">{{ filtrados.length }} {{ filtrados.length === 1 ? 'recurso' : 'recursos' }}</p>

    <div class="grade">
      <RecursoCard
        v-for="recurso in filtrados"
        :key="recurso.id"
        :recurso="recurso"
        :aberto="aberto === recurso.id"
        @alternar="alternar"
      />
    </div>
  </section>
</template>

<style scoped>
.recursos {
  max-width: var(--largura);
  margin: 0 auto;
  padding: 56px 20px;
}

h2 {
  margin: 0 0 20px;
  color: var(--texto-forte);
  font-size: 1.6rem;
}

.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filtros button {
  font: inherit;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--borda);
  background: var(--cartao);
  color: var(--texto);
  cursor: pointer;
}

.filtros button:hover {
  color: var(--texto-forte);
}

.filtros button.ativo {
  background: var(--destaque);
  border-color: var(--destaque);
  color: #06100c;
  font-weight: 600;
}

.contador {
  margin: 14px 0 18px;
  font-size: 0.9rem;
}

.grade {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  align-items: start;
}
</style>
