<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1 id="Introduction">
          Introduction
        </h1>
        <p>
          This website a documentation of a single web developer's
          reading, implementation, and knowledge of Vue. These are not
          the official documents for reference.
        </p>

        <p>
          However, I do think the information inside is valuable for
          as a quick reference for learning particular parts of Vue
          and for having it broken down that less seasoned programmers
          can understand it.
        </p>

        <h2 id="TheFocus">
          The Focus
        </h2>
        <p>
          This website will look at Vue from the perspective of using
          WebPack, Vue CLI, and NPM. All the necessary tools to get
          started are in the "Getting-Started" Page.
        </p>

        <p>
          I am also focusing on the <strong> Options API </strong>. In the future after I
          get a good handle on this part of Vue I will explore the
          <strong> Composition API </strong>.
        </p>

        <p>
          One last thing! On top of concepts, the documentation also
          covers creating simple components from scratch. I think
          these maybe helpful for those new to Vue!
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
import TopBar from '../../components/topBar/topBar.vue'
import ArticleNavigation from '../../components/articleNavigation.vue'
import FooterBar from '../../components/footerBar.vue'

export default {
  name: 'DocumentationIndex',
  components: {
    ArticleNavigation,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Introduction', 'The Focus']
    }
  }
}
</script>

<style scoped>
@import './documentationGlobalStyles.css';

</style>
