/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#3D4451',

					secondary: '#F000B8',

					accent: '#37CDBE',

					neutral: '#3D4451',

					'base-100': '#3D4451',

					info: '#3ABFF8',

					success: '#1db954',

					warning: '#FBBD23',

					error: '#F87272',

					spotify: '#1db954'
				}
			}
		]
	},

	plugins: [require('daisyui')]
};
