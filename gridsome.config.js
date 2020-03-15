// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
import { resolve } from 'path'

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve(__dirname, './src/assets/scss/globals.scss')
      ],
    })
}

export const siteName = 'sort-es'
export const siteUrl = 'https://sort-es.netlify.com'
export const templates = {
  Doc: '/:slug',
}
export const plugins = [
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'docs/**/*.md',
      typeName: 'Doc',
      remark: {
        plugins: [
          '@gridsome/remark-prismjs'
        ]
      }
    }
  },
  {
    use: '@gridsome/plugin-sitemap',
    options: {
      cacheTime: 600000
    }
  }
]
export function chainWebpack(config) {
  const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
}

