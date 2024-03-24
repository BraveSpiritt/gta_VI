/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {},
  },
  plugins: [],
  "atDirectives": [{
    "name": "@apply",
    "description": "Use the `@apply` directive to inline any existing utility classes into your own custom CSS. This is useful when you find a common utility pattern in your HTML that you’d like to extract to a new component.",
    "references": [
      {
        "name": "Tailwind Documentation",
        "url": "https://tailwindcss.com/docs/functions-and-directives#apply"
      }
    ]
  }]
}

