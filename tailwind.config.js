module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_7f: "#ffffff7f", A700_bf: "#ffffffbf", A700_01: "#ffffff" },
        gray: { 100: "#f2f6f6", 300: "#e0e1e6", 900: "#0c141c", "300_33": "#e1f0da33", "900_bf": "#0c141cbf" },
        green: { A400: "#38ef7d" },
        teal: { 900: "#00425a", A700_33: "#00c39733", A700: "#00c397" },
        blue_gray: { 500: "#4f7296" },
        cyan: { 900: "#055555" },
        black: { 600: "#656d76", A700_01: "#000000" },
      },
      boxShadow: {
        xs: "0px 4px 20px 0px #0000003f",
        sm: "4px 0px 4px 0px #0000003f",
        md: "0px 0px 13px 5px #00000029",
        bs: "inset 0px 4px 4px 0px #00000019",
      },
      backgroundImage: {
        gradient: "linear-gradient(270deg, #38ef7d3f,#11998e3f)",
        gradient1: "linear-gradient(270deg, #38ef7d,#11998e)",
        gradient2: "linear-gradient(270deg, #bff4bebf,#d6f6d5bf)",
        gradient3: "linear-gradient(180deg, #38ef7d,#11998e00)",
        gradient4: "linear-gradient(90deg, #055555,#40e0d0)",
      },
      fontFamily: { inter: "Inter", poppins: "Poppins", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
