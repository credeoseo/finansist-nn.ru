const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, e, theme, variants }) {

}, {
  theme: {
    extend: {
		colors: {
			themes: {
				default: '#1acdff',
				second: '#ffa101'
			}
		}
	},
  }
})
