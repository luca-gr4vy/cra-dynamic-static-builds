module.exports = {
  babel: {
    plugins: [
      ["module:@import-meta-env/babel", {
        env: ".env",
        example: ".env.example",
      }],
    ],
  }
}