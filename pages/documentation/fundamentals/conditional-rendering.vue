<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1 id="ConditionalRendering">
          Conditional Rendering
        </h1>

        <p>
          Depending on the conditions of certain variables you may set in
          the data or logic you include inline, you are doing to render
          certain elements based on this logic.
        </p>

        <p>
          Vue gives the user several tools to accomplish this.
        </p>

        <h2 id="v-if">
          *v-if
        </h2>
        <p>
          v-if is a directive used to conditionally render an element
          based on the truthiness of an expression. For example:
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;div&gt;
        &lt;p v-if="showMessage"&gt;This is a message&lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        data() {
            return {
                showMessage: true
            }
        }
    }
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          In this example, the 'p' element will only be rendered if the
          'showMessage' data property is 'true'.
        </p>

        <h2 id="v-else">
          *v-else
        </h2>

        <p> v-else is used in conjunction with v-if to create an "if-else" style of conditional rendering. For example: </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;div&gt;
        &lt;p v-if="showMessage">This is a message&lt;/p&gt;
        &lt;p v-else>This is not a message/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            showMessage: false
        }
    }
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          In this example, if showMessageis true, the first pelement will be
          rendered, otherwise the second pelement with v-else will be rendered.
        </p>

        <h2 id="v-show">
          *v-show
        </h2>
        <p>
          v-show is similar to v-if, but it's used to toggle the display property
          of an element rather than rendering it. For example:
        </p>

        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;div&gt;
        &lt;p v-if="showMessage">This is a message&lt;/p&gt;
        &lt;p v-else>This is not a message/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            showMessage: true
        }
    }
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <h3> Conclusion </h3>
        <p>
          It's important to note that v-if, v-else, and v-show directives
          have slightly different uses cases and performance implications. v-if
          has the most overhead and it will fully render the component only when
          the condition is met. v-show is less expensive but it will always
          render the component and just toggle the display property.
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
  name: 'ConditionalRenderingDocumentaton',
  components: {
    ArticleNavigation,
    CodeBlock,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Conditional Rendering', 'v-if',
        'v-else', 'v-show']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
