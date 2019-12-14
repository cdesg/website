// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			colors: {
				'brand-accent': '#BE1E2D',  

				'brand-gray-100': '#F9F9F9',			
				'brand-gray-200': '#D3D3D3',
				'brand-gray-300': '#A6A6A6',
				'brand-gray-400': '#909090',
				'brand-gray-500': '#7A7A7A',
				'brand-gray-600': '#636363',  
				'brand-gray-700': '#4D4D4D',
				'brand-gray-800': '#303030',
				'brand-gray-900': '#272727',
			} ,

			height: { 
				'96': '24rem',
				'128': '32rem',
			}
		}
	},
	variants: {},

	plugins: [
		//require('tailwindcss-transforms'),
		//require('tailwindcss-transitions'),
		//require('tailwindcss-border-gradients'),
	],
}
