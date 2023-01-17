<script setup>
const bemm = useBemm("my-component");
const cls = useClasses("my-classes-component");
const classes = classNames(["test", "something"]);
const usedBemms = useBemms({
  block: "my-component-1",
  block2: "my-component-2",
});
const generatedBemm = generateBemm("block", "element", "modifier");
</script>
<template>
  <h1>Nuxt Bemm Test</h1>
  <div class="bemm" :class="bemm()"></div>
  <div class="cls" :class="cls()"></div>
  <div class="classes" :class="classes"></div>
  <div class="useBemms" :class="usedBemms.block()"></div>
  <div class="generatedBemm" :class="generatedBemm"></div>
</template>
<style>
.bemm::before {
  content: "doesn't work";
}
.my-component::before {
  content: "it works!";
}
</style>
