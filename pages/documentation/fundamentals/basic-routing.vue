<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1 id="BasicRouting">
          Basic Routing
        </h1>
        <p>
          Vue has an
          <a href="https://router.vuejs.org/">
            official library
          </a>
          for routing web pages. To install this library:
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
npm install vue-router@4
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p> OR </p>
        <p>
          You can also install the router when creating a new project using
          the Vue CLI, which is covered in the
          <NuxtLink to="/documentation/fundamentals/getting-started">
            Getting Started
          </NuxtLink>
          section.
        </p>

        <hr>
        <p>
          There are two things you need to do so Vue Router will work in your
          project. Keep in mind, we are creating this in the context of a bundled
          project with webpack but should share the exact same concepts for
          non-bundled websites.
        </p>

        <h2 id="CreatetheRouter">
          Create the Router
        </h2>
        <p>
          This is a two part process. To create the router we need to have
          routes established because the router will accept this part of an
          object parameter.
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
import { createRouter, createWebHistory } from “vue-router”;

const routes = [
    {
        path:  ‘/’,
        name: ‘home’,
        component: () ⇒ import(’@views/HomeView.vue’)
    },
    {
        path: ‘/documentation’,
        name: ‘documentation’,
        component: () ⇒ import(’@views/DocumentationView.vue’)
    },
];
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          In both routes we create the url path, a name for the route,
          and connect it to a component. In this case, we connect it Vue’s
          “view” pages.
        </p>
        <p>
          The first route points to home if the path is only a “/”. If
          the url follows a normal pattern: “https://www.WebsiteName.com/”,
          then our router will insert the page into the DOM without reloading.
        </p>
        <p>
          Now we need to create the router:
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
const router = createRouter({
    history: createWebHistory(),
    routes
})
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <h2 id="InstantiatetheRouterinYourApp">
          Step 2: Instantiate the Router in Your App
        </h2>

        <p>
          Now that we have our route and router declared, we can instantiate it
          into our application. We call the “.use” property after we create the
          app and then mount the app to the DOM. Doing all the normal things to
          create an app and just adding “.use” as a wrapper of sorts.
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
import {  CreateApp } from ‘vue’;
import App from ‘./App.vue’;
import router from ‘./router’;

createApp(App).use(router).mount(’#app’);
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          Now we are ready to use the router!
        </p>

        <h2 id="DeclareRoutes">
          Declare Routes in a Component &lt;RouterView&gt;
        </h2>
        <p>
          In the parent component of your application we need to show where to
          inject the components (App.vue):
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;div&gt;
        &lt;RouterView&gt;  &lt;RouterView /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name: "PageOrComponentName",
    }
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          In the template, we add &lt;RouterView&gt; where our components will be
          routed to within the page. Now this solves the problem
          of simple routing, what else can we do?
        </p>

        <h2 id="NestingComponents">
          Nesting Components
        </h2>
        <h3 id="1.SendDatatothePage/ComponentWithaRoute">
          1. Send Data to the Page/Component With a Route
        </h3>

        <p> In this case, we need to change the routes: </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
{
    path: '/documentation/:documentationPage',
    name: 'documentationPages',
    components: {
        default: () => import('@/views/DocumentationView.vue')
    }
},
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          If the URL is “https://www.WebsiteName.com/documentation/getting-started”, the
          component that gets called will have access to a string that points to the
          value “getting-started”. To access this parameter in that component:
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
data() {
    return {
        page: this.$route.params.documentationPage,
    }
}
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          It’s kind of like passing props or parameters in a function, but instead of
          prop or function syntax, you pass a string via the URL slug.
        </p>

        <h3 id="2.Wecanincludeasecondcomponentintheroute:">
          2. We can include a second component in the route:
        </h3>
        <span> Route.js: </span>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
{
    path: '/documentation/:documentationPage',
    name: 'documentationPages',
    components: {
        default: () => import('@/views/DocumentationView.vue'),
        component: () => import(@/components/NavBar.vue)
    }
},
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <span> App.vue: </span>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;div&gt;
        &lt;RouterView name="NavBar"&gt;  &lt;RouterView /&gt;
        &lt;RouterView&gt;  &lt;RouterView /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {
        name: "PageOrComponentName",
    }
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          We add a component in the route and then we add another &lt;RouterView&gt;
          with a name to match up with the name of the component. This allows us
          to create dynamic pages and layouts by calling different components
          when needed.
        </p>
        <p>
          In short, this allows us to manage some logic in-page for displaying our website.
        </p>
        <p>
          For example, let’s say we have several pages of content for our
          documentation. We can use a dynamic route to send a string to
          the page to figure out which component to show. Let’s see it
          in action!
        </p>
        <p>
          Route: WebsiteName.com/documentation/getting-started
        </p>

        <p> DocumentationView.vue: </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
    &lt;div&gt;
        &lt;GettingStarted v-if="this.page === 'getting-started'" /&gt;
        &lt;MakingAComponent v-if="this.page === 'basic-routing' " /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import GettingStarted from "@/components/documentation/1_GettingStarted"
    import MakingAComponent from "@/components/documentation/2_MakingAComponent"

    export default {
    name: 'App',
	data() {
		return {
			page: this.$route.params.documentationPage
		}
	}
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p> We import 2 components in the script: (1) GettingStarted and (2) MakingAComponent. </p>
        <p>
          The page has a route object that we access using this.$route and we
          dig into its properties .params and then find specifically the data we
          passed in .documentationPage (a string from the URL-slug).
        </p>
        <p> Then we do some v-if conditional rendering to decide which component renders to the page. </p>
        <p>
          This is a very simple way of doing things without having to dig further into the
          router’s capabilities to manage complex routing.
        </p>
        <p>
          The downside, despite this being simple way of handling basic routing and
          routing children components, is that you have routing logic in the router
          AND the documentation page. For a smaller website this might be okay,
          but for a larger project one may want to manage routing ALL in one place.
        </p>

        <h3 id="3.CreatingChildrenComponentsUsingRoutes">
          3. Creating Children Components Using Routes
        </h3>
        <p> Vue Router also gives us tools to render children without parent components. </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
const routes = [
{
    path: '/documentation/:docTitle',
    component: () => import('@/views/DocumentationView.vue'),
    children: [
        {
            path: 'getting-started',
            component: () => import(@/components/1_GettingStarted.vue)
        },
        {
            path: 'basic-routing',
            component: () => import(@/components/2_MakingAComponent.vue)
        }
    ]
},
];
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p> If :docTitle matches a path, the router will then route to the corresponding child component. </p>

        <p>
          These should be enough tools to manage quite a bit of complexity for a developer’s routing needs. There will be
          further chapters on routing created that go in more depth.
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
  name: 'BasicRouting',
  components: {
    ArticleNavigation,
    TopBar,
    CodeBlock,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Basic Routing', 'Create the Router',
        'Instantiate the Router in Your App', 'Declare Routes',
        'Nesting Components', '1. Send Data to the Page/Component With a Route',
        '2. We can include a second component in the route:', '3. Creating Children Components Using Routes'
      ]
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';

</style>
