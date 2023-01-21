<template>
  <section>
    <div>
      <h1> Documentation Template </h1>
    </div>

    <div>
      <ArticleNavigation
        :subjectTitle="contentHeaders"
        :newHeaders="newHeaders"
      />
    </div>
  </section>
</template>

<script>
import ArticleNavigation from '../../components/articleNavigation.vue'

export default {
  name: 'DocumentationIndex',
  components: {
    ArticleNavigation
  },
  layout: 'documentation',
  data() {
    return {
      contentHeaders: [
        { title: 'one' },
        { title: 'two' }
      ],
      newHeaders: ['three', 'four']
    }
  }
}
</script>
