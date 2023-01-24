<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1> Making a Component </h1>
        <p>
          There are <u> three parts </u> of a Vue Component/Page:
        </p>

        <ol>
          <li>
            <b> Template </b> - Holds HTML that is reactive. In other words,
            Vue let’s you use syntatic sugar to add conditional rendering,
            variables, and other logic to your HTML.
          </li>
          <li>
            <b> Script </b> - Different hooks and ways to create JavaScript
            logic using methods, data (and state), and lifecycle methods to
            program logic for rendering your page.
          </li>
          <li>
            <b> Style </b> - Where you create CSS. If the word “scoped” is
            added to the styles tag the styles will only apply to the HTML
            in the template in the current component.
          </li>
        </ol>
        <p> Vue takes this code and compiles it down into JavaScript code. </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;h1>Title&lt;/h1&gt;
    &lt;p @click="logToConsole()" >Click Me&lt;/p&gt;

&lt;/template&gt;

&lt;script&gt;
    export default {
        //Some code
        name: "PageOrComponentName",
        methods: {
            logToConsole() {
                console.log("this is a console log!!!")
            }
        },
        data() {
            return: {
                isHover: false
            }
        },
    }
&lt;/script&gt;

&lt;style scoped&gt;
    /*Styles local to template on this file*/
&lt;/style&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h2> A Quick Review of Template </h2>

        <p>
          To add variables to your HTML, you can use text
          interpolation. This allows you to use mustache syntax
          to change text output.
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;span&gt; Hello &#123; &#123; textVariable &#125; &#125; &lt;/span&gt;
&lt;/template&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          The word “textVariable” is now capable of
          printing whatever the value inside it is.
        </p>
        <p>
          Binding to HTML attributes is important to. This allows you to
          add reactive variables to your HTML.
          To accomplish this, use v-bind (or its shorthand):
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
//v-bind
&lt;div v-bind:id="dynamicId"&gt; &lt;/div&gt;
//short hand for v-bind
&lt;div :id="dynamicId"&gt; &lt;/div&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          The id "dynamicId" is a variable that can be changed within the script area
          (which we will talk about soon). Depending on logic you set, "dynamicId" can
          be a string that equals whatever you set which allows you to change the id.
        </p>

        <p>
          This is pretty similar to the main documentation. Here are some extra examples
          to give you an idea of what you can do with template logic:
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;div :style=”{ backgroundImage: ImageVariable }”&gt; &lt;/div&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          Or you can use template literals:
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;div :style=”&#123;isChecking ? &#123;backgroundColor: ‘red’&#125;: &#123;backgroundColor: ’green’&#125;”&gt; &lt;/div&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h2> The Script Area </h2>
        <p> There are many important functions of the script area. To name a few: </p>

        <ol>
          <li> Give your component a name </li>
          <li> Store data </li>
          <li> Create methods </li>
          <li> Instantiate other components </li>
          <li> Pass or Receive Props </li>
          <li> And more! </li>
        </ol>

        <p> That's alot to go over! You may not understand all of it, but here's an example of doing all of this now: </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template>
    &lt;h1&gt;Title&lt;/h1&gt;
    //On click calls function from 'method' area in script
    &lt;p @click="logToConsole()" &gt;Click Me&lt;/p&gt;

    //Instantiated from 'components' in the script area
    &lt;ComponentName1/&gt;
    //passes prop 'details' as a strings
    &lt;ComponentName2 details="Great Worker" /&gt;

&lt;/template&gt;

&lt;script&gt;
    //Importing components
    import componentName1 from "/folder/path";
    import componentName2 from "/folder/path";

    export default {
       //Give component a name
        name: "PageOrComponentName",
        //store variables here
        data() {
            return: {
                username: "John",
            }
        },
        //create methods here
        methods: {
            logToConsole() {
                console.log(this.username)
            }
        },
        //instantiate components here after import
        components: {
            componentName1,
            componentName2,
        },
        //Declare props to be passed here
        props: ['details']
    }
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h2> The Style Area </h2>
        <p>
          To target specific elements in your template you can add
          classes or even call the elements themselves. In both cases,
          the CSS only affects HTML tags in this template/file.
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p class="paragraph"&gt;Some random text&lt;/p&gt;
&lt;/template&gt;

&lt;style scoped&gt;

    /*If an h1 exists on another component currently rendered,*/
    /*this style would stay local to this component*/
    h1 {
        font-size: 5em;
    }

    .paragraph {
        background-color: green;
    }
&lt;/style&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          That is all three areas of a component in Vue. The template, script,
          and styles area. The concepts for each part will be gone over in more
          detail in the further sections. At this point, you should have a basic
          understanding of how a simple application looks!
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
  name: 'MakingAComponent',
  components: {
    ArticleNavigation,
    TopBar,
    CodeBlock,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Making a Component', 'A Quick Review of Template',
        'The Script Area', 'The Style Area']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';

</style>
