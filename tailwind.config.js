/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50:  '#fdf8f3',
                    100: '#f8eddf',
                    200: '#f0d9bb',
                    300: '#e5be8e',
                    400: '#d89f60',
                    500: '#cc8840',
                    600: '#be7033',
                    700: '#9e592b',
                    800: '#7B4F2E',
                    900: '#3D2B1F',
                },
                secondary: {
                    400: '#e8c547',
                    500: '#D4A017',
                    600: '#b88810',
                },
                accent: {
                    500: '#2D6A4F',
                    600: '#245c43',
                    700: '#1b4d38',
                },
                cream: '#F9F5EE',
            },
            fontFamily: {
                serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
