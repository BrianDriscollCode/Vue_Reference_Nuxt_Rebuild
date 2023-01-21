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
  border-radius: 5px;
  width: 100%;
}

.javascript {
    padding: 0 0 0 1em;
    border-radius: 15px;
}
</style>
