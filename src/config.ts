/**
 * Configuration object for ANDJE-BOT.
 * @typedef {Object} Config
 * @property {string} user - The username for authentication.
 * @property {string} password - The password for authentication.
 * @property {Object} puppeteer - Configuration options for Puppeteer.
 * @property {boolean} puppeteer.headless - Whether to run Puppeteer in headless mode.
 * @property {Object} puppeteer.defaultViewport - Default viewport settings for Puppeteer.
 * @property {number} puppeteer.defaultViewport.width - The width of the viewport.
 * @property {number} puppeteer.defaultViewport.height - The height of the viewport.
 * @property {number} puppeteer.defaultViewport.deviceScaleFactor - The device scale factor of the viewport.
 * @property {string[]} puppeteer.args - Additional arguments for Puppeteer.
 */

/**
 * Configuration object data for ANDJE-BOT.
 * @type {Config}
 */
export const config = {
  user: "1022422292" || "1042353883",
  password: "Agentesoporte_16",
  slowMo: 200,
  puppeteer: {
    headless: false,
    defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
    args: ["--start-maximized"],
    devtools: false,
  },
  basePath: "http://54.159.160.153:8081/ekogui-gateway/",
}
