/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./apps/web/index.html",
		"./apps/web/src/**/*.{js,ts,jsx,tsx}",
		"./packages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: "#1d4ed8",
					light: "#3b82f6",
				},
			},
			borderRadius: {
				DEFAULT: "0.625rem",
			},
		},
	},
	plugins: [],
};
