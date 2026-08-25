<script setup>
import { ref } from 'vue'
const title = ref('Landing Page - Vue.js')
</script>

<template>
  <div class="container">
    <header class="header">
      <h1>{{ title }}</h1>
      <p>Projeto Desenvolvido para a Atividade Prática de Frameworks Front-end (SENAI)</p>
    </header>

    <main class="content">
      <section class="card">
        <h2>Sobre o Projeto</h2>
        <p>Esta aplicação foi desenvolvida utilizando <strong>Vue.js</strong>, cumprindo os requisitos de reatividade e componentização progressiva.</p>
      </section>

      <section class="card">
        <h2>Recursos Utilizados</h2>
        <ul>
          <li>Single-File Components (SFC)</li>
          <li>Sistema de Reatividade Automática</li>
          <li>Ferramenta de Build com Vite</li>
        </ul>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2026 - Aluna: Lívia Ghirardi</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  color: #333;
}
.header {
  text-align: center;
  margin-bottom: 30px;
  background-color: #42b883;
  color: white;
  padding: 20px;
  border-radius: 8px;
}
.card {
  background: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.footer {
  text-align: center;
  margin-top: 40px;
  color: #666;
  font-size: 0.9em;
}
</style>