<template>
  <section class="contentWrapper">
    <div class="mainContent">

      <div class="mainContentContainer">
        <h1> Documentation Template </h1>

      <p> This is some example content. </p>
        <!-- eslint-disable -->
        <CodeBlock>
export default {
  name: 'exampleName',
  components: {
    ComponentName
  },
  data() {
    return {
      variableName: 'stringValue'
    }
  }
}
        </CodeBlock>
        <!-- eslint-enable -->

        <p> This is some example content. </p>

        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
        <p> This is some example content. </p>
      </div>
    </div>

    <div class="articleNavigation">
      <ArticleNavigation
        :new-headers="newHeaders"
      />
    </div>
  </section>
</template>

<script>
import ArticleNavigation from '../../components/articleNavigation.vue'
import CodeBlock from '../../components/codeBlock.vue'

export default {
  name: 'DocumentationIndex',
  components: {
    ArticleNavigation,
    CodeBlock
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['three', 'four']
    }
  }
}
</script>

<style scoped>
@import './documentationGlobalStyles.css';
</style>
