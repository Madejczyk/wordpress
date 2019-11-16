module.exports = {
    server: {
        command: 'node server.js',
        port: 8080,
    },
    launch: {
        headless: process.env.HEADLESS !== 'false',
        slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        devtools: true
    }
}
