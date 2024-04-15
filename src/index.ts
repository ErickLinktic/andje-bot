import { login } from "./functions/login"
// import { goToHome } from "./functions/goToHome"
import puppeteer from "puppeteer"
import { config } from "./config"
import { basicHappyPath } from "./workflows/basic-happypath"

puppeteer.launch(config.puppeteer).then(async (browser) => {
  const page = await browser.newPage()
  await page.goto(config.basePath)

  await login(page).catch((e) => console.log(e))

  if (config.mode === "basic") {
    basicHappyPath(page)
  }
})
