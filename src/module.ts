import { addImports, defineNuxtModule } from '@nuxt/kit'
import * as lodash from 'lodash-es'
// import exculdeDefaults from './exclude'

export interface ModuleOptions {
  /**
   * Prefix to be added before every lodash function
   * False to disable prefix
   *
   * @defaultValue `use`
   */
  prefix: false | string;
  /**
   * Functions that starts with keywords in this array will be skipped by prefix
   *
   * @defaultValue ['is']
   */
  prefixSkip: string[];
  /**
   * Array of lodash funcions to be exluded from auto-imports
   *
   * @defaultValue []
   */
  exclude: string[];
  /**
   * Iterable of string pairs to alias each function
   *
   * @defaultValue []
   */
  alias: Iterable<[string, string]>;
  /**
   * Upper case first letter after prefix
   * False to disable uppercasing
   *
   * @defaultValue true
   */
   upperAfterPrefix: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-bemm',
    configKey: 'bemm',
    compatibility: {
      nuxt: '^3.0.0-rc.12'
    }
  },
  defaults: {
    prefix: '',
    prefixSkip: [],
    exclude: [],
    alias: [],
    upperAfterPrefix: true
  },
  setup (options, nuxt) {
    const aliasMap = new Map<string, string>(options.alias)
    const exludes = [...options.exclude, ...[]]


    const bemmPlugins = {
      createBemm: { name: "createBemm", as: "createBemm" },
      createMultiBemm: { name: "createMultiBemm", as: "createMultiBemm" },
    };

    for (const name of Object.keys(bemmPlugins)) {
      if (!exludes.includes(name)) {
        const alias = aliasMap.has(name) ? aliasMap.get(name)! : name
        const prefix = (!options.prefixSkip.some(key => alias.startsWith(key)) && options.prefix) || ''
        const as = prefix.length ? prefix + (options.upperAfterPrefix ? lodash.upperFirst(alias) : alias) : alias
        addImports({ name, as, from: 'bemm' })
      }
    }

    nuxt.hook('vite:extend', ({ config }) => {
      config.optimizeDeps ||= {}
      config.optimizeDeps.exclude ||= []
      config.optimizeDeps.exclude.push('bemm')
    })
  }
})
