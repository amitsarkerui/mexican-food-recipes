/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1480&t=st=1683051760~exp=1683052360~hmac=cab5ee4c18593bfc4dfcdb8b75a2f02b786fe424a3d5dc6cd9380d8848f4f929')",
      },
    },
  },
  plugins: [daisyui],
};
