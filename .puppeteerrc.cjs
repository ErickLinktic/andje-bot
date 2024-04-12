const { join } = require("path");

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
  executablePath:
    "C:/Program Files/BraveSoftware/Brave-Browser-Nightly/Application/Brave.exe",
};
