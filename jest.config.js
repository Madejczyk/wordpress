module.exports = {
    preset: "jest-puppeteer",
    globals: {
      URL: "http://localhost:9000"
    },
    testMatch: [
      "**/test/**/*.test.js"
    ],
    verbose: true
}
