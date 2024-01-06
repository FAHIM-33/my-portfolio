
/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: "var(--primary)",
        sec: "var(--secondary)",
        
      }
    },
  },
  plugins: [],
}
