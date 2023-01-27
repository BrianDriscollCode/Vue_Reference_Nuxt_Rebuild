<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1 id="EventHandling">
          Event Handling
        </h1>

        <p>
          Events are handled using the v-on directive. This directive, or @
          for short, contain either an inline handler or a method handler.
        </p>

        <hr>
        <h2 id="InlineHandlers">
          Inline Handlers
        </h2>
        <p>
          An inline handler... handles all the logic inline. This example is
          fairly similar to the official docs because this example explains it
          in a very straightforward way.
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
//In template:
&lt;button @click=”number++”&gt; Add &lt;/button&gt;

&lt;p&gt; Count is: { { number } } &lt;p&gt;

//In script:
data() {
    return {
        number: 1
    }
}
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>When clicking the button, the number will be incremented and then displayed within the paragraph tag.</p>
        <hr>

        <h2 id="Methods">
          Methods
        </h2>
        <p>
          These handlers will involve calling a method from the script. For example,
          let’s say I want to change an inline styling of a component using a
          button/method handler:
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;script&gt;
export default {

    data() {
        return {
            colorChoice: “green”
        }
    },

    methods: {
        changeColor(currentColor) {
            currentColor === “blue” ?

            this.colorChoice = “green”;
            this.colorChoice = “blue”;
        }
    }
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;h1&gt; Event Handler &lt;/h1&gt;

    &lt;p :style=”{backgroundColor: colorChoice}”&gt; color background &lt;/p&gt;

    &lt;button @click=”changeColor(colorChoice)”&gt; switch color &lt;/button&gt;
&lt;/template&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          In the template, the p tag has an inline style for the background color. Instead
          of background-color like in CSS, this is instead backgroundColor. Inserted as
          the value for the backgroundColor is colorChoice which you can see is
          initialized in the script under the data section as “green”. This means
          the background will be the color green for the p tag.
        </p>

        <p>
          The button is referring to a method called changeColor and accepts a
          parameter called currentColor. Using a ternary operator (JavaScript),
          we figure out if the currentColor matches “blue”. If it does, we toggle
          the color to green. If not, we toggle the color to blue.
        </p>

        <hr>

        <h2 id="EventModifiers">
          Event Modifiers
        </h2>
        <p>
          In an effort to separate out method logic from ingrained browser logic,
          Vue has created event modifiers for your events. The most common of these
          is event.preventDefault() which prevents the page from refreshing (usually
          used during form submits).
        </p>

        <p>
          Instead of including the event.preventDefault() syntax within the method
          you are calling, it would be done inline within the template and element
          that is being clicked.
        </p>

        <h3 id="prevent">
          *prevent
        </h3>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;form @submit.prevent&gt; &lt;/form&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h3 id="passive">
          *passive
        </h3>
        <p> This event modifier prevents event.preventDefault() from being called and is used for a smooth scrolling experience on mobile devices. </p>

        <h3 id="once">
          *once
        </h3>
        <p> Only trigger the event once. </p>

        <h3 id="self">
          *self
        </h3>
        <p> Only triggers if the event being called derives from the element itself, not a child of that element. </p>
        <p> Just a quick example using the previous method handler example: </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;button @click.self="changeColor(colorChoice)"&gt;

  switch color

  &lt;button&gt; Embed button &lt;/button&gt;
&lt;/button&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p> We embed a button within a button just to make the logic explicit. </p>
        <p>
          If you click the button within the button with the text “Embed button”, the method
          will not fire. Only when click the button itself outside of the “Embed button” will
          it fire.
        </p>
        <hr>
        <h2 id="KeyModifiers">
          Key Modifiers
        </h2>
        <p>
          Vue allows us to listen for specific key presses using kebab casing of the
          deprecated KeyboardEvent.key. via the v-on directive.
        </p>
        <p> Here are a few examples: </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;input :keyup.page-down="nextPage"&gt;

&lt;input :keypress.q="quit"&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p> Some other modifiers: </p>
        <ul>
          <li> .enter </li>
          <li> .tab </li>
          <li> .delete </li>
          <li> .esc </li>
          <li> .space </li>
          <li> .up </li>
          <li> .down </li>
          <li> .left </li>
          <li> .right </li>
        </ul>

        <h2 id="SystemModifiers">
          System Modifiers
        </h2>
        <p>
          These serve as a type of "and" operator. A system modifier must be
          pressed along with another key or click modifier.
        </p>
        <ul>
          <li> .ctrl </li>
          <li> .alt </li>
          <li> .shift </li>
          <li> .meta (command key for Macintosh) </li>
        </ul>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;input @keypress.ctrl.q="exit"/&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h2 id="MouseButtonModifiers">
          Mouse Button Modifiers
        </h2>
        <ul>
          <li> .left </li>
          <li> .right </li>
          <li> .middle </li>
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
  name: 'EventHandlingDocumentation',
  components: {
    ArticleNavigation,
    CodeBlock,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Event Handling', 'Inline Handlers', 'Methods',
        'Event Modifiers', 'Key Modifiers', 'System Modifiers',
        'Mouse Button Modifiers']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
