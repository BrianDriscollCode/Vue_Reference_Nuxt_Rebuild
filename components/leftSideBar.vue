<template>
  <section class="leftSideBarContainer">
    <div class="navTitleContainer">
      <img src="../assets/vue_logo.png" width="40px" height="40px">
      <p class="navTitle">
        Vue Reference
      </p>
    </div>

    <div>
      <h3> Vue Fundamentals </h3>
      <li class="navItem">
        <NuxtLink to="documentation/introduction">
          Introduction
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/getting-started">
          Getting Started
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/making-a-component">
          Making a Component
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/computed-properties">
          Computed Properties
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/basic-routing">
          Basic Routing
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/props">
          Props
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/lifecycle">
          Lifecycle
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/directives">
          Directives
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/event-handling">
          Event Handling
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/conditional-rendering">
          Conditional Rendering
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/emitted-events">
          Emitted Events
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/v-model">
          V-Model
        </NuxtLink>
      </li>
    </div>

    <div>
      <h3> Vue In-Depth </h3>
      <li class="navItem">
        <NuxtLink to="documentation/slots">
          Slots
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/provide-and-inject">
          Provide and Inject
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/attribute-inheritance">
          Attribute Inheritance
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/async-components">
          Async Components
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/vue-api-reference">
          Vue API Reference
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/reactivity-and-state">
          Reactivity and State
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/working-inline-the-template">
          Working Inline the Template
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/shared-state-solution">
          Shared State Solution
        </NuxtLink>
      </li>
    </div>

    <div>
      <h3> Reusability </h3>
      <li class="navItem">
        <NuxtLink to="documentation/composables">
          Composables
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/custome-directive">
          Custom Directive
        </NuxtLink>
      </li>
    </div>

    <div>
      <h3> Tooling and Pre-Built Components </h3>
      <li class="navItem">
        <NuxtLink to="documentation/custom-directives">
          Custom Directives
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/transition">
          Transition
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/transition-group">
          Transition Group
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/keep-alive">
          Keep Alive
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/teleport">
          Teleport
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/suspense">
          Suspense
        </NuxtLink>
      </li>
    </div>

    <div>
      <h3> Component Examples </h3>
      <li class="navItem">
        <NuxtLink to="documentation/banner">
          Banner
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/article-preview">
          Article Preview
        </NuxtLink>
      </li>
      <li class="navItem">
        <NuxtLink to="documentation/multiple-layout">
          Multiple Layout
        </NuxtLink>
      </li>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LeftSideBar'
}
</script>

<style scoped>

.navTitleContainer {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  margin-bottom: 3em;
}

.navTitle {
  font-size: 16px;
  font-weight: 600;
  color: #34445c;
}

h3 {
  font-size: 15px;
  font-weight: 700;
  margin-top: 2.5em;
  margin-bottom: 0.5em;
  color: #34445c;
}

.leftSideBarContainer {
  height: 100vh;
  padding: 0 1em 0 1em;
  overflow: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.navItem {
  list-style: none;
  list-style-type: none;
  padding: none;
}

li {
  font-size: 14px;
  line-height: 1.7em;
  color: #346c6a;
}

</style>
