<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ListaRecursos from './components/ListaRecursos.vue'
import ComecarSection from './components/ComecarSection.vue'
import AppFooter from './components/AppFooter.vue'

const titulo = 'Recursos do Vue.js'
const subtitulo =
  'Um framework progressivo para criar interfaces com componentes de arquivo único e reatividade automática. Escolha uma categoria e abra um recurso para ver como ele funciona.'
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection :titulo="titulo" :subtitulo="subtitulo" />
    <ListaRecursos />
    <ComecarSection />
  </main>
  <AppFooter />
</template>
