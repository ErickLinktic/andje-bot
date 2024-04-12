import { login } from "./functions/login"
import { consultar } from "./functions/consultar"
// import { goToHome } from "./functions/goToHome"
import puppeteer from "puppeteer"
import { config } from "./config"
import { completarInformacionBasica } from "./functions/form/completarInformacionBasica"

puppeteer.launch(config.puppeteer).then(async (browser) => {
  const page = await browser.newPage()
  await page.goto(config.basePath)

  await login(page).catch((e) => console.log(e))
  // ! Omitido porque es relativo a cada usuario autenticado!
  // await goToHome(page)

  await consultar(page)
  await completarInformacionBasica(page)
  console.log("consultar")
})
