 <h1>Bemm for Nuxt</h1>
 
<p>
  <a href="https://www.npmjs.com/package/nuxt-bemm"><img src="https://badgen.net/npm/v/nuxt-bemm" alt="Version"></a>
  <a href="https://www.npmjs.com/package/nuxt-bemm"><img src="https://badgen.net/npm/license/nuxt-bemm" alt="License"></a>
  <a href="https://www.npmjs.com/package/nuxt-bemm"><img src="https://badgen.net/npm/types/nuxt-bemm" alt="Types"></a>
</p>
   
## 💡 About

[Bemm](https://bemm.sil.mt) auto-import module for [Nuxt](https://nuxtjs.org).

## 📦 Install

1. Install `nuxt-bemm` as development dependency:

```bash
npm install nuxt-lodash --save-dev
```

2. Add it to the `modules` section of your `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ["nuxt-bemm"],
});
```

## Example

Use Bemm in all components in your Nuxt app.

```html
<script setup>
  const bemm = createBemm("my-component");
</script>

<template>
  <div :class="bemm('something')">Test</div>
  <!-- <div class="my-component__something">Test</div>-->
</template>
```

## Configuration

| Name         | Default | Description                                                                      |
| ------------ | ------- | -------------------------------------------------------------------------------- |
| `prefix`     | `''`    | String to prepend before each Lodash function (false to disable)                 |
| `prefixSkip` | `[]`    | Functions that starts with keywords in this array will be skipped by prefix      |
| `exclude`    | `[]`    | Array of Bemm functions to exclude from auto-imports                             |
| `alias`      | `[]`    | Array of array pairs to rename specific Lodash functions (prefix is still added) |

### Example

```ts
export default defineNuxtConfig({
  modules: ["nuxt-bemm"],
  bemm: {
    prefix: "_",
    prefixSkip: ["createMultiBemm"],
    exclude: [],
    alias: [["createBemm", "myBemm"]],
  },
});
```

## License

[MIT License](https://github.com/silvandiepen/nuxt-bemm/blob/master/LICENSE) © 2022 - [Sil van Diepen](https://sil.mt)
