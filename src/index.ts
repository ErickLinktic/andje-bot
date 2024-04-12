import { login } from "./functions/login"
import { consultar } from "./functions/consultar"
import { goToHome } from "./functions/goToHome"
import puppeteer from "puppeteer"
import { config } from "./config"

puppeteer.launch(config.puppeteer).then(async (browser) => {
  const page = await browser.newPage()
  await page.goto("http://54.159.160.153:8081/ekogui-gateway/")
  //   const browser = await puppeteer.connect({
  //     browserWSEndpoint: 'ws://127.0.0.1:9222/devtools/browser/f9ac7cc7-6bd0-409d-91d8-08d9c4ba4fa9',
  // });

  // const pages = await browser.pages(); // Gets all open pages (tabs)

  // const page = pages[0];

  const dimensions = await page.evaluate(() => {
    return {
      width: window.screen.availWidth,
      height: window.screen.availHeight,
    }
  })

  await page.setViewport(dimensions)

  await page.goto("http://localhost:9000/ekogui-gateway/inicio")
  await login(page).catch((e) => console.log(e))
  await goToHome(page)

  await consultar(page)
  console.log("consultar")
})
