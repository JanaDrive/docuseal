const path = require('path')

module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    path.resolve(__dirname, 'app/javascript/template_builder/dynamic_area.vue'),
    path.resolve(__dirname, 'app/javascript/template_builder/dynamic_section.vue')
  ],
  theme: {
    extend: {
      colors: {
        'base-100': '#FCFAF8',
        'base-200': '#F8F4F1',
        'base-300': '#E6E0DC',
        'base-content': '#191611'
      }
    }
  }
}
