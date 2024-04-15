import { Page } from "puppeteer"
import { consultar } from "../functions/consultar"
import { completarAdmisionDeLaSolicitud } from "../functions/form/completarAdmisionDeLaSolicitud"
import { completarHechosYCausas } from "../functions/form/completarHechosYCausas"
import { completarInformacionBasica } from "../functions/form/completarInformacionBasica"
import { completarValorEconomico } from "../functions/form/completarValorEconomico"
import { IConfig } from "../interfaces/config.types"

export async function basicHappyPath(page: Page, type?: IConfig["mode"]) {
  console.log("consultar")
  await consultar(page)
  console.log("Informacion basica")
  await completarInformacionBasica(page, type)
  console.log("Hechos y causas")
  await completarHechosYCausas(page)
  console.log("Valor economico")
  await completarValorEconomico(page)
  console.log("Admision de la solicitud")
  await completarAdmisionDeLaSolicitud(page)
}
