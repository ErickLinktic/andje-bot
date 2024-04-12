import { login } from "./functions/login"
import { consultar } from "./functions/consultar"
import { goToHome } from "./functions/goToHome"
import puppeteer from "puppeteer"
import { config } from "./config"

puppeteer.launch(config.puppeteer).then(async (browser) => {
  const page = await browser.newPage()
  await page.goto("http://54.159.160.153:8081/ekogui-gateway/")

  await page.goto("http://localhost:9000/ekogui-gateway/inicio")
  await login(page).catch((e) => console.log(e))
  await goToHome(page)

  await consultar(page)
  console.log("consultar")
})
