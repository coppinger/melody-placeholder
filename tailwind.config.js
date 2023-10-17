/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            animation: {
                "infinite-scroll": "infinite-scroll 100s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
            },
        },
    },
    plugins: [],
};
