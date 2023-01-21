<template>
  <section>
    <h4> In this Article </h4>
    <ul>
      <li v-for="header in subjectTitle" :key="header.title">
        {{ header.title }}
      </li>
      <li v-for="title in newHeaders" :key="title">
        {{ title }}
      </li>
    </ul>
    <p> {{ newHeaders }} </p>
  </section>
</template>

<script>
export default {
  name: 'ArticleNavigation',
  props: {
    subjectTitle: {
      type: Array,
      required: true
    },
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
