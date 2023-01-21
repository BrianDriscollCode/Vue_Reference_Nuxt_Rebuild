<template>
  <section>
    <h1> Vue </h1>
    <!-- eslint-disable -->
    <CodeBlock>
export default {
  name: 'test',
    data() {
      return {
      joe: 'jorengo'
    }
  }
}
    </CodeBlock>
    <!-- eslint-enable -->
  </section>
</template>

<script>
import CodeBlock from '../components/codeBlock.vue'

export default {
  name: 'IndexPage',
  components: {
    CodeBlock
  }
}
</script>
