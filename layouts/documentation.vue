<template>
  <div class="documentationContainer">
    <section class="leftSideBar">
      Left Side Bar
    </section>

    <section class="documentationView">
      <div class="topBar">
        Top Bar
      </div>

      <div class="content">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'DocumentationLayout'
}
</script>

<style scoped>
.documentationContainer {
  display: flex;
  width: 100%;
  height: 100vh;
}

/* Navigation */

.leftSideBar {
  background-color: blue;
  width: 15%;
}

.documentationView {
  width: 85%;
  height: 100vh;
}

/* Content */

.topBar {
  background-color: green;
  position: fixed;
  width: 100%;
  height: 50px;
}

.content {
  background-color: lightcoral;
  height: 100vh;
}

</style>
