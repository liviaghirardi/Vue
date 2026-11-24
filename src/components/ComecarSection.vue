<script setup>
const comandos = ['npm create vue@latest', 'cd projeto-vue', 'npm install', 'npm run dev']
</script>

<template>
  <section id="comecar" class="cta">
    <div class="caixa">
      <div>
        <h2>Comece seu projeto Vue</h2>
        <p>Com o Node.js instalado, quatro comandos criam e executam um novo projeto.</p>
        <a class="botao" href="https://vuejs.org" target="_blank" rel="noopener">Documentação oficial</a>
      </div>
      <pre><code><span v-for="comando in comandos" :key="comando">$ {{ comando }}</span></code></pre>
    </div>
  </section>
</template>

<style scoped>
.cta {
  max-width: var(--largura);
  margin: 0 auto;
  padding: 0 20px 64px;
}

.caixa {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  align-items: center;
  padding: 32px;
  border-radius: 18px;
  border: 1px solid var(--borda);
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.15), rgba(53, 73, 94, 0.3));
}

h2 {
  margin: 0 0 8px;
  color: var(--texto-forte);
}

p {
  margin: 0 0 20px;
}

.botao {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 999px;
  background: var(--destaque);
  color: #06100c;
  font-weight: 700;
  text-decoration: none;
}

.botao:hover {
  filter: brightness(1.1);
}

pre {
  margin: 0;
  padding: 18px;
  border-radius: 12px;
  background: #06100c;
  overflow-x: auto;
}

code span {
  display: block;
  color: var(--destaque);
  font-size: 0.9rem;
  line-height: 1.8;
}
</style>
