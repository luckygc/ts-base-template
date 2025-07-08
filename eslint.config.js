import antfu from '@antfu/eslint-config'

export default antfu({
  lessOpinionated: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
})
