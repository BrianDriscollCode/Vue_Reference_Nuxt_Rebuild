<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1 id="ComputedProperties">
          Computed Properties
        </h1>

        <p>
          At first, computed properties can be confusing. It may seem as
          if this is the section for functions and variables.
        </p>

        <p>
          I will recommend looking at computed properties as a set of tools that
          allow you to add computation to your template. Each tool has its uses
          and they are very flexible. So much so that you can accomplish close
          to the same things using different tools.
        </p>

        <p>
          But for now, it is time to be explicit. Here are some ways to use your
          script to manipulate the template of your page:
        </p>

        <h2> Methods </h2>
        <p>
          You write and store your functions in the methods section of your script.
          In short, this section is good for writing function logic and you need to
          call the functions for them to be used.
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;h1&gt;Title&lt;/h1&gt;
  &lt;p&gt;{ { message } }&lt;p&gt;
  //click directive is attached to a method
  &lt;button @click="ChangeMessage" &gt;Wake John&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: "PageOrComponentName",
  data() {
    return: {
      message: "John is sleeping.",
    }
  },
  //functions are placed in the methods section
  methods: {
    changeMessage() {
      this.message = "John is awake,"
    },
    logToConsole() {
      console.log("Testing Page")
    }
  },
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          When clicking the button, the function changeMessage gets called
          because the v-on:click directive (or @click for short) ties
          that button to it.
        </p>

        <p>
          In that function, this.message is changed and this change will also
          appear in the template because it is a reactive dependancy (because
          it is declared in the data() section).
        </p>

        <h2 id="Computed">
          Computed
        </h2>
        <p>
          This may seem similar to methods, but instead this is how you declare a
          piece of logic that is connected to a reactive property. To clarify, a
          reactive property is a piece of data that is automatically updated if any
          of its properties change, as illustrated in the example.
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;h1>Title&lt;/h1&gt;
    &lt;p>{ { age } }&lt;/p&gt;
    &lt;button @click="ChangeAge" &gt;Change Age&lt;/button&gt;
&lt;/template>

&lt;script&gt;
    export default {
        name: "PageOrComponentName",
        data() {
            return: {
                a: 10,
                b: 9,
            }
        },
        computed: {
            age: function() {
                return this.a + this.b
            }
        },
        methods: {
            changeAge() {
                this a = 20;
            }
        }
    }
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          The age is established in the computed section of the script.
          Because a is "10" and b is "9", age will print out as "19" in the
          template.
        </p>
        <p>
          The button has a directive attached to the "changeAge" function in
          the methods section of the script. Clicking this button causes the
          function to change the value of a from "10" to "20". Age is automatically
          updated to "29" in the template because a is "20" and b is "9".
        </p>

        <h2 id="Data">
          Data
        </h2>
        <p>
          This is where you store your reactive properties/variables. The information
          you add here will return the initial state of our component and Vue will
          make the properties reactive.
        </p>
        <p> What does it mean when Vue makes a property reactive? </p>

        <h2 id="DifferenceBetweenReactiveandImperative">
          Difference Between Reactive and Imperative
        </h2>
        <p>
          NEED TO FIX: Typically, JavaScript has ways of doing things Imperatively
          (do these things in this order) or declaratively (this is what I want for
          when these things are happening).
        </p>
        <p> Take the expression: </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
let a = 2;
let b =3;
let age = a + b;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          In JavaScript, age will point to the number 5. BUT, if right after, I was
          to change the variable a:
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
let a = 2;
let b =3;
let age = a + b;
a = 10;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p> The variable age still points to 5. </p>
        <p>
          BUT, as we've shown in the computed section, Vue will automatically
          update age is we make it a reactive dependancy by using the data and
          computed section.
        </p>
        <p> Which all can be manipulated with your methods. </p>

        <h2 id="WaystoUseMethods">
          Ways to Use Methods
        </h2>
        <p> Here are just a few suggestions to utilize methods in Vue: </p>
        <ul>
          <li>
            Changing the values of either inline styles or the class of an element
            so that it uses a new style based on a condition like hover, click, or
            moving the mouse.
          </li>
          <li> Call for and manipulate data from either within the application or an external source. </li>
          <li>
            Use reactivity and computation to keep track of client width/height so you can use those variables to adjust
            background sizes and more.
          </li>
        </ul>
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
  name: 'ComputedProperties',
  components: {
    ArticleNavigation,
    CodeBlock,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Computed Properties', 'Methods',
        'Computed', 'Data', 'Difference Between Reactive and Imperative',
        'Ways to Use Methods']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
