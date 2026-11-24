export const CATEGORIAS = ['Componentes', 'Reatividade', 'Ferramentas']

export const RECURSOS = [
  {
    id: 1,
    titulo: 'Single-File Components',
    categoria: 'Componentes',
    resumo: 'Template, lógica e estilo no mesmo arquivo .vue.',
    detalhe:
      'Cada arquivo .vue tem três blocos: <template> com o HTML, <script setup> com a lógica e <style scoped> com o CSS que vale só para aquele componente.',
    exemplo: '<template>...</template>\n<script setup>...</script>\n<style scoped>...</style>',
  },
  {
    id: 2,
    titulo: 'Props e Emits',
    categoria: 'Componentes',
    resumo: 'Comunicação entre componente pai e filho.',
    detalhe:
      'defineProps recebe dados do pai e defineEmits envia eventos para ele. Nesta página, cada card emite "alternar" quando é clicado.',
    exemplo: "const emit = defineEmits(['alternar'])",
  },
  {
    id: 3,
    titulo: 'ref',
    categoria: 'Reatividade',
    resumo: 'Cria um valor reativo.',
    detalhe:
      'Quando o valor de um ref muda, o Vue atualiza automaticamente as partes da tela que usam esse valor. Aqui ele guarda o filtro e o card aberto.',
    exemplo: 'const filtro = ref(null)',
  },
  {
    id: 4,
    titulo: 'computed',
    categoria: 'Reatividade',
    resumo: 'Valores calculados a partir de outros.',
    detalhe:
      'Um computed é recalculado só quando os valores de que ele depende mudam. A lista filtrada desta página é um computed.',
    exemplo: 'const filtrados = computed(() => RECURSOS.filter(...))',
  },
  {
    id: 5,
    titulo: 'Diretivas',
    categoria: 'Reatividade',
    resumo: 'v-for, v-if, v-bind e v-on no template.',
    detalhe:
      'v-for repete elementos, v-if mostra ou esconde, :atributo (v-bind) liga dados e @evento (v-on) reage a cliques.',
    exemplo: '<button v-for="c in categorias" :key="c" @click="selecionar(c)">',
  },
  {
    id: 6,
    titulo: 'Interpolação',
    categoria: 'Reatividade',
    resumo: 'Mostra dados com {{ }}.',
    detalhe:
      'A sintaxe de chaves duplas exibe o valor de uma variável ou expressão no HTML e se atualiza sozinha quando o valor muda.',
    exemplo: '<p>{{ filtrados.length }} recursos</p>',
  },
  {
    id: 7,
    titulo: 'create-vue',
    categoria: 'Ferramentas',
    resumo: 'Cria o projeto com as opções escolhidas.',
    detalhe:
      'O comando npm create vue@latest pergunta quais recursos incluir (Router, Pinia, TypeScript, testes) e gera o projeto pronto.',
    exemplo: 'npm create vue@latest',
  },
  {
    id: 8,
    titulo: 'Vite',
    categoria: 'Ferramentas',
    resumo: 'Servidor de desenvolvimento e build rápidos.',
    detalhe:
      'O Vite sobe o projeto em milissegundos, atualiza a página a cada alteração e gera a versão otimizada para produção.',
    exemplo: 'npm run dev',
  },
]
