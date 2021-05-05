module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
        screens: {},
        fontFamily: {},
        extend: {
            colors: {
                'darkblue': '#191923',
                'darkblue-light': '#2c2c38',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
