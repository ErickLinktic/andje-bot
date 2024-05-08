const { join } = require("path")
require("dotenv").config({ path: ".env" })

const { executablePath } = process.env

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  // cacheDirectory: join(__dirname, ".cache", "puppeteer"),
  executablePath: executablePath,
}
