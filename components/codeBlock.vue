<template>
  <div class="codeBlock">
    <pre>
      <!-- eslint-disable no-console -->
      <code v-highlight="code" class="javascript">
      <!-- eslint-enable no-console -->
        <slot />
      </code>
    </pre>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.codeBlock {
  margin: 0 auto 0 auto;
  border-radius: 5px;
  width: 100%
}

.javascript {
    padding: 0 0 0 2em;
    border-radius: 15px;
    font-size: 15px;
}
</style>
