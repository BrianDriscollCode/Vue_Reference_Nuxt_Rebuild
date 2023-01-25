<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1 id="Directives">
          Directives
        </h1>

        <p>
          There are quite a few directives built-in to Vue. But for the sake of
          simplicity, only ones that I think are necessary and often used will
          be included. For example, v-html can be used to add HTML to your
          component, but it comes with security risks AND scoped stylings will
          not apply. Therefore it isn’t included.
        </p>

        <h2 id="v-text">
          *v-text
        </h2>
        <p>
          Sets the element’s text content. In JavaScript terms, it changes this
          part of an element:
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
document.getElementById(”divA”).textContent
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <ul>
          <li>Type Input: string</li>
        </ul>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
//Can either be implemented within the element
&lt;span v-text=”varName”&gt; &lt;/span&gt;

//Or you can use mustache interpolations:
&lt;span&gt; { { varName } } &lt;/span&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h2 id="v-show">
          v-show
        </h2>
        <p> Show and element whether or not the expression within is truthy. </p>
        <ul>
          <li>Type Input: any </li>
        </ul>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;div v-show=”isItTruthy”&gt; &lt;/div&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          Sets the inline style of an element and it will do it’s best to
          respect the initial display value. Unlike changing display: block
          to display: none, it will allow transitions when changed.
        </p>

        <h2 id="v-if">
          *v-if
        </h2>
        <p>
          Renders the elements based on whether the expression is truthy.
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;div v-if=”isItTruthy”&gt; &lt;/div&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          When the logic is triggered, the element is destroyed and
          re-constructed. This is more expensive after the render,
          where v-show is more expensive during the render.
        </p>

        <p>
          If false, then the element won’t be rendered. This will
          also allow transitions, unlick toggling display: none → display: block.
        </p>

        <h2 id="v-else-if">
          v-else-if
        </h2>
        <p>
          Part of a logical chain of if, else-if, and else statements. Renders
          if condition is truthy.
        </p>

        <h2 id="v-else">
          v-else
        </h2>
        <p>
          The last part of the logical chain of an if-else. Renders if the other
          parts do not meet truthy requirements.
        </p>
        <ul>
          <li>Type Input: any</li>
        </ul>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;div v-if=”participants === 1”&gt;

    1 Player

&lt;/div&gt;

&lt;div v-else-if=”participants === 2”&gt;

    2 Player

&lt;/div&gt;

&lt;div v-else=”participants === 3”&gt;

    3 Player

&lt;/div&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h2 id="v-for">
          *v-for
        </h2>
        <p>
          Takes in a piece of data and iterates through it to render multiple
          times based on the amount of elements in the source.
        </p>

        <ul>
          <li> Type Input: Array, Object, number, string </li>
        </ul>

        <h2 id="v-on">
          *v-on
        </h2>
        <p>
          Also appears as the shorthand “@” and attaches an event
          listener to an element.
        </p>

        <ul>
          <li> Type Input: Function, Inline Statement, Object </li>
          <li>
            Common Modifiers
            <ul>
              <li> .prevent - call event.preventDefault() </li>
              <li> .once - trigger handler one time </li>
              <li> .left - only trigger from left button mouse events. </li>
              <li> .right - only trigger from right button mouse events. </li>
              <li> .passive - Makes a <a href="https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners"> DOM event passive. </a> </li>
            </ul>
          </li>
          <li> Examples: </li>
          <!-- eslint-disable -->
        <pre>
          <CodeBlock>
//These are both the same, just one uses the shorthand "@" syntax.
&lt;button v-on:click="aMethod"&gt; &lt;/button&gt;
&lt;button @click="aMethod"&gt; &lt;/button&gt;

//This is a dynamic event so you can run different pieces
// of logic depending on what you choose to insert.
&lt;button @[event]="aMethod"&gt;  &lt;/button&gt;

//Submits (a form for example) and adds the event.preventDefault()
// so a page refresh does not occur.
&lt;button @submit.prevent&gt;  &lt;/button&gt;

//Listens for when the user let’s the “enter” key up.
&lt;button @keyup.enter="aMethod"&gt;  &lt;/button&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        </ul>

        <h2 id="v-bind">
          *v-bind
        </h2>
        <p>
          This will be one of the most commonly used directives. Instead of
          only allowing a hard-coded string, v-bind will allow you to input
          variables allowing for more dynamic use. It can be used on a class,
          style, src, or an object of multiple attributes.
        </p>
        <ul>
          <li>Type Input: any</li>
        </ul>
        <p>
          This directive is fairly complex with modifiers that will force
          bindings into a DOM property or attribute, but to keep it straight
          forward, you will use this directive whenever wanting to input a
          variable (number, string, array, object, etc) into an element’s
          attribute within the template.
        </p>
        <ul>
          <li> Examples: </li>
          <!-- eslint-disable -->
        <pre>
          <CodeBlock>
//These are the same
&lt;img v-bind:src="imagePath" /&gt;
&lt;img :src="imagePath" /&gt;

//This defines the class name as “className” and accepts a truthy value.
// To make this more usable, the truthy value would instead be a variable in
// data or a computed property.
&lt;button @[event]="aMethod"&gt;  &lt;/button&gt;

//Submits (a form for example) and adds the event.preventDefault()
// so a page refresh does not occur.
&lt;button @submit.prevent&gt;  &lt;/button&gt;

//Listens for when the user let’s the “enter” key up.
&lt;button @keyup.enter="aMethod"&gt;  &lt;/button&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

          <p>
            You can also use expressions to make your style bindings
            reactive as shown in the binded divs below. The displayType
            and sizes can be changed depending on how you choose to compute
            those properties.
          </p>

          <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;!-- Without binding --&gt;
&lt;div style="fontSize: 35px"&gt; &lt;/div&gt;

&lt;!-- With binding --&gt;
&lt;div :style="{ display: displayType }"&gt; &lt;/div&gt;
&lt;div :style="{ marginTop: size + 'px'}"&gt; &lt;/div&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        </ul>

        <h2 id="v-model">
          *v-model
        </h2>
        <p>
          When creating forms, it’s very useful to create a binding between
          the user’s input and a state variable in your program. V-model allows
          us to simplify this process to create a two-way binding of data.
        </p>
        <ul>
          <li> Can be used with: &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;, and &lt;components&gt; </li>
          <li> Example: </li>
          <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;input v-model=”searchText” /&gt;
&lt;p&gt; { { searchText } } &lt;/p&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        </ul>
        <p>
          In the example, assume we have already declared a variable called
          “searchText” in options api via “data”. We then enter this variable
          into the v-model which now binds that input’s value to the searchText
          state variable.
        </p>
        <p> Whatever we enter into the input will also display in the paragraph tag. </p>
        <p> We can bind data between components using props. </p>
        <p> Parent component: </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;input v-model=”searchText” /&gt;

&lt;ComponentName :inputText="searchText" /&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p> Child Component: </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
//In Template
&lt;p&gt; { { inputText } } &lt;/p&gt;
&lt;ComponentName :inputText="searchText" /&gt;

//In Script
props: {
    inputText: String
}

          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          We declare v-model in the parent component, declare the searchText
          data variable, and then we send a prop down to the child component
          which is also using v-bind (because we sending a variable through).
        </p>
        <p>
          Then in the child component, we handle the data just like a regular
          prop. Declare the props with it’s type and then you can use it with
          mustache syntax.
        </p>

        <h2 id="v-slot">
          *v-slot
        </h2>
        <h2 id="v-pre">
          *v-pre
        </h2>
        <h2 id="v-once">
          *v-once
        </h2>
        <h2 id="v-memo">
          *v-memo
        </h2>
        <h2 id="v-cloak">
          *v-cloak
        </h2>

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
  name: 'DirectivesDocumentation',
  components: {
    ArticleNavigation,
    CodeBlock,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['v-text', 'v-show', 'v-if', 'v-else-if',
        'v-else', 'v-on', 'v-bind', 'v-model', 'v-slot',
        'v-pre', 'v-once', 'v-memo', 'v-cloak']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
