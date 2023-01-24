<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1> Conditional Rendering </h1>

        <p>
          In Vue, emitted events are a way for a child component to
          communicate with its parent component. The child component
          emits an event, which the parent component can listen for
          and respond to. This allows for a unidirectional flow of
          data between the parent and child components.
        </p>
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

        <p>
          In Vue, emitted events are a way for a child component to
          communicate with its parent component. The child component
          emits an event, which the parent component can listen for
          and respond to. This allows for a unidirectional flow of
          data between the parent and child components.
        </p>

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

    <div class="articleNavigationContainer">
      <ArticleNavigation
        :new-headers="newHeaders"
      />
    </div>
  </section>
</template>

<script>
import TopBar from '../../../components/topBar/topBar.vue'
import ArticleNavigation from '../../../components/articleNavigation.vue'
import CodeBlock from '../../../components/codeBlock.vue'

export default {
  name: 'ConditionalRenderingDocumentaton',
  components: {
    ArticleNavigation,
    CodeBlock,
    TopBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Introduction', 'How Does Vue Work?',
        'Installing Vue Using NPM']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
