<template>
  <section class="articleNavigationWrapper">
    <h4> In this Article </h4>

    <div class="navigationLinkWrapper">
      <li v-for="title in newHeaders" :key="title" href="#" class="listElement">
        <a href="#" class="navigationLink"> {{ title }} </a>
      </li>
    </div>

    <p> {{ newHeaders }} </p>
  </section>
</template>

<script>
export default {
  name: 'ArticleNavigation',
  props: {
    newHeaders: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    console.log(this.subjectTitle, this.headers)
  }
}
</script>

<style scoped>

.articleNavigationWrapper {
  position: fixed;
}

.navigationLinkWrapper {
  display: flex;
  flex-direction: column;
  background-color: red;
}

.listElement {
  list-style: none;
}

.navigationLink {
  list-style: none;
}
</style>
