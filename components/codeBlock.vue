<template>
  <div class="codeBlock">
    <!-- eslint-disable -->
      <code v-highlight class="javascript code">
        <slot />
      </code>
      <!-- eslint-enable -->
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     code: 'CODE'
  //   }
  // }
}
</script>

<style scoped>
.codeBlock {
  margin: 0 auto 0 auto;
  padding: 0 !important;
  border-radius: 5px;
  width: 100%
}

pre {
  padding-top: -2em !important;
}

.javascript {
    padding: 0 0 0 2em;
    border-radius: 15px;
    font-size: 15px;
}
</style>
