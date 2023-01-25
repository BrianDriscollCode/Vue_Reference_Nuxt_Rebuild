<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1 id="Props">
          Props
        </h1>

        <p>
          If you are from the React world, you will be very familiar with props.
          Vue offers similar functionality with their prop system.
        </p>

        <p>
          If not, here’s a short explanation of what props are: props are pieces
          of data that you pass down to child components.
        </p>

        <img src="~/assets/props_to_child.png">
        <p>
          There are two ways to declare a prop in a child component so that it
          can receive data from the parent component:
        </p>

        <p> <strong> 1. Using an Array of Strings: </strong> </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
export default {
  props: ['firstString', 'secondString', 'thirdString']
}
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          Each string within the props array can now be used to pass down data to another components.
        </p>
        <p> <strong> 2. Using Object and Type Syntax </strong> </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
export default {
  props: {
    firstProp: String,
    secondPropRandomName: Number
  }
}
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          In this example we declare a prop name then specify a type for that
          prop. This helps ensure type safety via static typing when passing
          data between components.
        </p>
        <p>
          Now the component can display the prop to the template. Keep in
          mind though, it will show nothing because there is no data yet
          being displayed or passed yet. Let’s now go to the parent component
          and pass data down to the child component.
        </p>

        <h2 id="PassingDataasProps">
          Passing Data as Props
        </h2>
        <p>
          You can pass any datatype as a prop. Of course, depending on the
          data-type and whether we are passing something static or dynamic,
          there different things we will have to do.
        </p>
        <p> First, let's pass a static string from the parent to the child. </p>
        <p> In the parent: </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;Banner title="My Journey with Vue"&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p> In the code snippet above, we are passing a string as a prop called "title". </p>
        <p> But what if the data is going to change? </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;Banner :title="post.title" /&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          Above we are accessing the title property of a post while also using colons to tell
          Vue that we want this prop to be reactive.
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;Banner :title="post.title + ' by ' + post.author" /&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          The code snippet above shows how you can use an expression
          inside of a reactive prop. Inside the data, or if you have
          made an external call to a database or api, you would receive
          an object. This expression is combining two properties of the
          post object called title and author.
        </p>
        <p>
          To dive a little more in the v-bind syntax, specifically the colon,
          when passing all types of data v-bind is necessary except for strings
          that are not reactive.
        </p>
        <p> For example: </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;!-- no v-bind --&gt;
&lt;Banner title="hello world" /&gt;

&lt;!-- with v-bind --&gt;
&lt;Banner :title="32" /&gt;
&lt;Banner :title="[23, 23, 24]" /&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h2 id="One-WayDataFlow">
          One-Way Data Flow
        </h2>
        <p>
          On the main Vue documentation, it will explain that data
          only flows one way, from parent to child. It is created this
          way because it makes it simple to understand the data flow
          and you lower the risk of mutating data.
        </p>
        <p>
          BUT, there is a way to pass data from a child component to a
          parent component. You can pass a function down as a prop and
          allow that function to change data in the parent component.
        </p>
        <p>
          If you are just learning for the first time and need a way to
          overcome this hurdle, this is a quick band-aid fix.
        </p>
        <p>
          Although, if you are looking to expand your application further,
          a state solution like Vuex or Pinia should start being explored.
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
  name: 'PropsDocumentation',
  components: {
    ArticleNavigation,
    CodeBlock,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Props', 'Passing Data as Props', 'One-Way Data Flow']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
