<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1 id="GettingStarted">
          Getting Started
        </h1>

        <p>
          You can utilize basic html and JavaScript or Webpack/Vite to
          utilize Vue. In this section we will focus on using npm, the
          Vue CLI, and webpack to spin up the Vue framework.
        </p>

        <h2 id="WhatisVue?">
          What is Vue?
        </h2>

        <p>
          Vue is a JavaScript framework used for creating user interfaces.
          It allows you to break down your application into much smaller
          components. This allows for more seperation of concerns and an
          intuitive way to structure an application.
        </p>

        <h2 id="DownloadingVue">
          Downloading Vue
        </h2>

        <p> To continue, you will need: </p>
        <ul>
          <li>
            Node.js:
            <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">
              https://nodejs.org/en/download/
            </a>
          </li>
          <li>
            npm:
            <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">
              https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
            </a>
          </li>
        </ul>

        <p>
          Now with the terminal, we are going to get some native tooling. Install the Vue
          eco-system command-line interface, Vue CLI:
        </p>

        <!-- eslint-enable -->
        <pre>
          <CodeBlock>
  npm install -g @vue/cli
          </CodeBlock>
        </pre>
        <!-- eslint-disable -->

        <p> Then pick a folder you want your project to be located in. </p>
        <p> In that folder, type this in the terminal: </p>

        <!-- eslint-enable -->
        <pre>
          <CodeBlock>
 vue create project-name
          </CodeBlock>
        </pre>
        <!-- eslint-disable -->

        <p> After it is done downloading. You can now spin up your project: </p>
        <!-- eslint-enable -->
        <pre>
          <CodeBlock>
npm run serve
          </CodeBlock>
        </pre>
        <!-- eslint-disable -->

        <h2 id="ResourcesforLearning"> Resources for Learning </h2>
        <p> There are many resources to learn Vue from due to its large community! </p>
        <ul>
          <li>
            <a href="https://vuejs.org/guide/introduction.html" target="_blank">
              Main Vue Documentation
            </a>
          </li>
          <li>
            <a href="https://www.vuemastery.com/" target="_blank">
              Vue Mastery (Paid Courses)
            </a>
          </li>
          <li>
            <a href="https://m.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1" target="_blank">
             The Net Ninja Youtube Video Course
            </a>
          </li>
        </ul>

        <h2 id="CommonFront-endFeatures"> Common Front-End Features </h2>

        <p>
          Why should you use Vue!? Vue is another Frontend Framework like
          React, Angular, and Svelte. All frameworks have their own unique
          system and way of doing things... Vue is no different. It has
          been described as "easy to pickup", but I think a better
          description would be "easier to collaborate with non-Vue
          and Vue developers alike".
        </p>
        <p>
          If you already know concepts like conditional rendering or
          using html with added functionality, then Vue
          is easy-to-understand.
        </p>
        <p>
          If you just know JavaScript, it's easy to get started.
          <strong> Because Vue looks like html/css/JavaScript! </strong>
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
//Put HTML-based template syntax here
&lt;template&gt;
  &lt;h1 class="mainTitle">Title&lt;/h1&gt;
  &lt;p @click="logToConsole()" >Click Me&lt;/p&gt;
&lt;/template&gt;

//Include your code and important functionality here
&lt;script&gt;
export default {
  name: "PageOrComponentName",
  methods: {
    logToConsole() {
      console.log("this is a console log!!!")
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
/*Styles local to template on this file*/
.mainTitle {
  font-size: 5em;
}
&lt;/style&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <h2 id="QuickLookataVueAppStructure">
          Quick Look at a Vue App's Structure
        </h2>
        <img src="~/assets/VueNavigationExample.jpg">

        <p> The highlighted components represent three important parts of a Vue Application: </p>
        <ul>
          <li> main.js </li>
          <li> App.vue </li>
          <li> Components </li>
        </ul>

        <h3 id="File:main.js">
          File: main.js
        </h3>

        <p> This file initiates the application with "createApp" from Vue. </p>

        <p>
          Also, if you downloaded a library or other package using NPM,
          Vite, or the Vue CLI, this is where you can add previously
          downloaded packages like routers, state management,
          and more to your application. In this example, we are wrapping
          store (Vuex), router (Vue Router), and highlightJS to our Vue
          Application then mounting it.
        </p>
        <p>
          Think about it like you are wrapping your application with
          functionality from another codebase.
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
//Vue specific imports
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//External library import
import highlightJS from "highlight.js"

//Instantiate application and libraries
createApp(App).use(store).use(router).use(highlightJS).mount('#app')
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <h3 id="File:App.vue">
          File: App.vue
        </h3>
        <p>
          Here is the first parent in your application tree. From components,
          to complicated siloed structures, or even just a basic web page can
          be located here.
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
//Using imported components "NavBar" and "ToDoListContainer"
&lt;template>
  &lt;NavBar /&gt;
  &lt;TodoListContainer /&gt;
&lt;/template&gt;


&lt;script&gt;
//Importing components
import NavBar from "./components/main/NavBar.vue";
import TodoListContainer from "./components/todo_list/TodoListContainer.vue";
import "./assets/global.css";

export default {
  name: 'App',
  //Instantiating imported components
  components: {
    NavBar,
    TodoListContainer
  }
}
&lt;/script&gt;

//Basic styling scoped to this file's template
&lt;style scoped&gt;
html {
  height: 100%;
}

body {
  height: 100%;
  background-color: rgb(47, 93, 211);
}
&lt;/style&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-disable -->

        <h3 id="File:Components"> File: Components </h3>

        <p>
          Just like how the App.vue file contains a template, script,
          and css section, components are formed exactly the same.
        </p>
        <p> These are <strong> Single-File-Components </strong> </p>
        <p>
          In the next section we go over each section of a component
          so you can understand how they work!
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
  name: 'GettingStarted',
  components: {
    ArticleNavigation,
    TopBar,
    CodeBlock,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Getting Started', 'What is Vue?', 'Downloading Vue',
        'Resources for Learning', 'Common Front-end Features', 'Quick Look at a Vue App Structure',
        'File: main.js', 'File: App.vue', 'File: Components']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';

</style>
