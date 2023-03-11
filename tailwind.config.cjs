/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xsm: "428px",
			sm: "480px",
			md: "768px",
			lg: "1200px",
			xl: "1440px",
		},
		extend: {
			colors: {
				"link-primary": "#1111FF",
				"link-secondary": "#5454D4",
				"btn-txt-primary": "#3939E0",
				"txt-primary": "#2D26E2",
				"txt-secondary-100": "#696871",
				"txt-secondary-700": "#8C87A6",
				"txt-secondary-800": "#19191B",
				"txt-secondary-900": "#0A071B",
				"border-secondary": "#E1DFEC",
				"line-secondary": "#D4D4FB",
				"secondary-100": "#E0E0F9",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			backgroundImage: {
				"btn-gradient":
					"linear-gradient(96.71deg, #5656F2 0%, #3333DC 101.64%)",
				"txt-gradient-100":
					"linear-gradient(94.59deg, #4141FF 7.54%, #3535DD 36.55%)",
				"txt-gradient-200":
					"radial-gradient(23.65% 2629.9% at 57.79% 50%, #6E6EFD 0%, #3636DE 100%)",
				"txt-gradient-300":
					"linear-gradient(90deg, #6E6EFD 34.14%, #3636DE 81.45%)",
			},
		},
	},
	plugins: [],
};
