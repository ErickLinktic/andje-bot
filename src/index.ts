import { login } from "./functions/login"
import { consultar } from "./functions/consultar"
// import { goToHome } from "./functions/goToHome"
import puppeteer from "puppeteer"
import { config } from "./config"
import { completarInformacionBasica } from "./functions/form/completarInformacionBasica"
import { completarHechosYCausas } from "./functions/form/completarHechosYCausas"
import { completarValorEconomico } from "./functions/form/completarValorEconomico"
import { completarAdmisionDeLaSolicitud } from "./functions/form/completarAdmisionDeLaSolicitud"

puppeteer.launch(config.puppeteer).then(async (browser) => {
  const page = await browser.newPage()
  await page.goto(config.basePath)

  await login(page).catch((e) => console.log(e))
  // await goToHome(page)

  console.log("consultar")
  await consultar(page)
  console.log("Informacion basica")
  await completarInformacionBasica(page)
  console.log("Hechos y causas")
  await completarHechosYCausas(page)
  console.log("Valor economico")
  await completarValorEconomico(page)
  console.log("Admision de la solicitud")
  await completarAdmisionDeLaSolicitud(page)
})
