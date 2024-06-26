import { Page } from "puppeteer"
import { autoScroll } from "./autoScroll"
import { typeOnNgSelect } from "./typeOnNgSelect"

export async function addVictima(page: Page, total = 2) {
  await autoScroll(page, 6)
  console.log("Entró a añadir Victima")
  for (let i = 0; i < total; i++) {
    console.log("Se entro al flujo: ", i + 1)
    await typeOnNgSelect(
      page,
      "#victima_tipo_de_documento",
      "CEDULA DE CIUDADANIA"
    )
    await page.type("#victima_identificacion", `1${i + 1}`)

    await page.keyboard.press("Tab")

    await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

    await page.keyboard.press("Enter")

    if (i + 1 === total) {
      await autoScroll(page, 6)
    }
  }
}
