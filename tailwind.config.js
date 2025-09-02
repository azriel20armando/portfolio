/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorFundo: "#01111E",
        buttonColor: "#0767AC",
        textColor: "#0d98fc",
        borderColor: "#13B4E6",
        hoverColor: "#13B4E6",
      },
      backgroundImage: {
				fundoBg: "url('/bg.png')",
        fotoPerfil: "url('/foto.jpg')"
			},
    },
  },
  plugins: [],
};
