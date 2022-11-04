<script setup>
const bemm = _createBemm("my-component");
</script>
<template>
  <div :class="bemm"></div>
</template>
<style>
div::before {
  content: "doesn't work";
}
.my-component::before {
  content: "it works!";
}
</style>
