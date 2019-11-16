module.exports = {
    preset: "jest-puppeteer",
    globals: {
      URL: process.env.IP ? `http://${process.env.IP}:${process.env.PORT}` : "http://localhost:8080"
    },
    testMatch: [
      "**/test/**/*.test.js"
    ],
    verbose: true
}
