import { Page } from "puppeteer"
import { autoScroll } from "./autoScroll"
import { typeOnNgSelect } from "./typeOnNgSelect"
import { sleep } from "./sleep"

export async function addVictima(page: Page, total = 2) {
  await autoScroll(page, 6)
  console.log("Entró a añadir Victima")
  for (let i = 0; i < total; i++) {
    await sleep(500)
    console.log("Se entro al flujo: ", i + 1)
    await typeOnNgSelect(
      page,
      "#victima_tipo_de_documento",
      "CEDULA DE CIUDADANIA"
    )
    await page.type("#victima_identificacion", `1${i + 1}`)
    await page.keyboard.press("Tab")

    await page.waitForNetworkIdle({
      idleTime: 500, // time in milliseconds to wait after the last network request finishes
      timeout: 60000, // maximum time in milliseconds to wait
    })

    await page.keyboard.press("Enter")

    if (i + 1 === total) {
      await autoScroll(page, 6)
      await page.click('.btn_consult_and_clean button[type="submit"]')
    }
  }
}
