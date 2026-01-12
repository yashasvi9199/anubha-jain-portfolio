/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#09090b',
                surface: '#18181b',
                surfaceHighlight: '#27272a',
                secondary: '#a1a1aa',
                primary: '#ffffff',
                accent: '#c084fc', // purple-400
            },
            fontFamily: {
                serif: ['Inter', 'serif'],
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
