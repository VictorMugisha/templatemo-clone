/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*html"],
    theme: {
        extend: {
            colors: {
                customWhite: "rgba(255, 255, 255, 0.10)", // Light white color with opacity 50%
            },
        },
    },
    plugins: [],
};
