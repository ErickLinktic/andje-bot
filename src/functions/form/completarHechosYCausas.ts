import { Page } from "puppeteer"
import { autoScroll } from "../../utils/autoScroll"
import { loremImpsun } from "../../utils/loremImpsun"
import { sleep } from "../../utils/sleep"
import { typeOnNgDatePicker } from "../../utils/typeOnNgDatePicker"
import { typeOnNgSelect } from "../../utils/typeOnNgSelect"

export async function completarHechosYCausas(page: Page) {
  await page.waitForNetworkIdle()

  // ? Fecha de los hechos
  await sleep(1200)
  await typeOnNgDatePicker(page, "#fecha_echos")

  // ? Departamento
  await typeOnNgSelect(page, "#departamento", "AMAZONAS")

  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

  // ? Municipio
  await typeOnNgSelect(page, "#municipio", "EL ENCANTO")

  await autoScroll(page, 3)

  await page.keyboard.press("Tab")
  await page.keyboard.press("Enter")

  await page.type("#descripcion_de_los_echos", loremImpsun)

  await autoScroll(page, 4)

  await page.type("#presentasiones_declarativas", loremImpsun)

  // ? Causa
  await typeOnNgSelect(page, "#causa", "ACCESION POR ALUVION")

  await autoScroll(page, 4)

  // ? Subcausa
  await page.type("#subcausa", "Any causa! Greetings..")

  await page.keyboard.press("Tab")
  await page.keyboard.press("Enter")

  await sleep(50)

  await page.evaluate(() => {
    const buttons = document.querySelectorAll<HTMLButtonElement>(
      'button[type="submit"]'
    )
    if (buttons[1]) {
      buttons[1].click()
    }
  })
}
