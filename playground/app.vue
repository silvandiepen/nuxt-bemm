<script setup>
const bemm = createBemm("my-component");
</script>
<template>
  <div class="something" :class="bemm()"></div>
</template>
<style>
.something::before {
  content: "doesn't work";
}
.my-component::before {
  content: "it works!";
}
</style>
