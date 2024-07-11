/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				foreground: '#f0f0f7',
				background: '#1e1e2f',
				content: '#27283c',
				primary: '#7959de',
				secondary: '#27283c',
			},
		},
	},
	darkMode: 'class',
}
