<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1> Provide and Inject </h1>

        <p>
          <mark>provide</mark> allows a component to share its state with its
          descendants, while inject allows a component to access the
          state provided by its ancestors.
        </p>

        <p>
          Here's an example of how to use <mark>provide</mark> and
          <mark>inject</mark> in a Vue.js application:
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
// Parent component

export default {
  name: 'Parent',
  provide() {
    return {
      theme: 'dark'
    }
  },
  template: `
    &lt;div&gt;
      &lt;Child /&gt;
    &lt;/div&gt;
  `
}
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <pre>
          <CodeBlock>
// Child component

export default {
  name: 'Child',
  inject: &#91;'theme'&#93;,
  template: `
    &lt;div :class="theme"&gt;
      { { theme } }
    &lt;/div&gt;
  `
}
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          In this example, the <mark>Parent</mark> component is using the <mark>provide</mark> feature
          to make the <mark>theme</mark> property available to its descendants. The <mark>Child</mark>
          component is using the <mark>inject</mark> feature to access the <mark>theme</mark> property
          provided by its ancestor.
        </p>

        <p>
          The <mark>inject</mark> option is an object that maps the name of the property to be injected
          (e.g. "theme") to the key of the property in the <mark>provide</mark> object. It can
          also be an array that contains the names of the properties to be
          injected.
        </p>
        <p>
          It's important to notice that the provide and inject features are only
          available in the component's scope, not global.
        </p>
        <p>
          Another way to use provide and inject is using the <mark>provide</mark> option in the
          component's <mark>options</mark> and <mark>inject</mark> option in the component's <mark>computed</mark>
          properties.
        </p>
        <!-- eslint-enable -->
        <pre>
          <CodeBlock>
export default {
  name: 'Parent',
  provide: {
    theme: 'dark'
  },
  template: `
    &lt;div&gt;
      &lt;Child /&gt;
    &lt;/div&gt;
  `
}
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <!-- eslint-enable -->
        <pre>
          <CodeBlock>
export default {
  name: 'Child',
  computed: {
    ...inject('theme')
  },
  template: `
    &lt;div :class="theme"&gt;
      { { theme } }
    &lt;/div&gt;
  `
}
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          This way, the <mark>Child</mark> component can use the <mark>theme</mark> property as a computed
          property, so it can be reactive.
        </p>

        <FooterBar />
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
import FooterBar from '../../../components/footerBar.vue'

export default {
  name: 'ProvideAndInjectDocumentation',
  components: {
    ArticleNavigation,
    CodeBlock,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Provide and Inject']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
