<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1 id="Lifecycle">
          Lifecycle
        </h1>

        <p>
          At different stages in an applications rendering and initialization,
          you will want to run logic or even make api calls. That is what
          lifecycle methods are used for.
        </p>

        <p>
          Vue provides several methods at different stages of the application
          lifecycle. This is an image taken directly from <a href="https://vuejs.org/assets/lifecycle.16e4c08e.png"> Vue JS Organization
            website: </a>
        </p>

        <div class="imageContainer">
          <img
            src="~/assets/lifecycle_diagram.png"
            height="auto"
            width="80%"
            class="documentationImage"
          >
        </div>

        <p> For now, we are going to skip the composition api setup lifecycle. </p>

        <h3 id="beforeCreate">
          *beforeCreate
        </h3>

        <p>
          The first lifecycle methods is “beforeCreate”. This is ran at the initialization
          stage of the component. At this point you do not have access to data or events.
          This is a good method to access local storage to see if a user is currently
          logged in to your website.
        </p>

        <h3 id="created">
          *created
        </h3>

        <p>
          The “created” method has access to data and events. It runs before the
          Virtual DOM and templates have been created. Here you can call an API
          and set the information to your data..
        </p>

        <h3 id="beforeMount">
          *beforeMount
        </h3>

        <p>
          The “beforeMount” method runs after the first render. Also it runs after
          the template has been compiled.
        </p>

        <h3 id="mounted">
          *mounted
        </h3>

        <p>
          The “mounted” method runs after the DOM nodes are created and inserted.
          You have access to the template, rendered DOM, and reactive component.
          You can use this.$el to see what is available. This the most commonly
          used lifecycle method.
        </p>

        <h2 id="UpdateMethods">
          Update Methods
        </h2>

        <p> These methods are part of the rerender cycle triggered by updates in reactive properties. </p>

        <h3 id="beforeUpdate">
          *beforeUpdate
        </h3>
        <p>
          The “beforeUpdate” method is called before the DOM is re-rendered.
          It’s useful for changing any reactive data that needs to be displayed
          before the render.
        </p>

        <h3 id="updated">
          *updated
        </h3>
        <p> The “updated” runs after the rerender and gives you access to the DOM after a property change. </p>

        <h2 id="UnmountMethods">
          Unmount Methods
        </h2>
        <h3 id="beforeUnmount">
          *beforeUnmount
        </h3>
        <p>
          This fires right before a component unmounts from the DOM. You still have access to DOM elements
          here and this.$el, watchers, and methods. This is useful for notifying a server about deletion events.
        </p>

        <h3 id="unmount">
          *unmount
        </h3>
        <p>
          This fires after the component is removed. You still have access to this.$el and can be used to clean
          up data or event listeners or timers.
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
import FooterBar from '../../../components/footerBar.vue'

export default {
  name: 'LifecycleDocumentation',
  components: {
    ArticleNavigation,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Lifecycle', 'beforeCreate', 'created', 'beforeMount',
        'mounted', 'UpdateMethods', 'updated', 'Unmount Methods',
        'beforeUnmount', 'unmount']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
