/* Include the PurgeCSS plugin */ 
const purgecss = require('@fullhuman/postcss-purgecss')


module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		purgecss({
			content: ['./layouts/**/*.html', './contents/**/*.html', './assets/js/**/*.js'],
			defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
		  })
	]
}