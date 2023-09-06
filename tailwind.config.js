/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            colors: {
                cgold: '#EDD290',
                dgold: '#D4AF37',
                blue: '#f1f1f1',
                cblue: '#c5e1de',
                gold: '#EDC967',
                purple: '#08678a',
                background: '#191B1F',
            },
        },
    },
    plugins: [],
};
