/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*html"],
    theme: {
        extend: {
            colors: {
                customWhite: "rgba(255, 255, 255, 0.10)", // Light white color with an opacity of 90%
                customBlack: "rgba(0, 0, 0, 0.25)", // Transparent black color with an opacity of 50%
            },
        },
    },
    plugins: [],
};
