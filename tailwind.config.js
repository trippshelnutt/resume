module.exports = {
    purge: {
        enabled: process.env.NODE_ENV == 'production',
        content: ['**/*.html'],
        options: {
            safelist: [],
        },
    },
    theme: {},
    variants: {},
    plugins: [],
}