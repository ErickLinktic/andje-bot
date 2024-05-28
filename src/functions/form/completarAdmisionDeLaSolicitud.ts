import { Page } from "puppeteer"
import { autoScroll } from "../../utils/autoScroll"
import { loremImpsun } from "../../utils/loremImpsun"
import { sleep } from "../../utils/sleep"

export async function completarAdmisionDeLaSolicitud(page: Page) {
  await page.waitForNetworkIdle()
  await sleep(1000)
  await page.waitForSelector("#documents_support", { timeout: 40000 })
  await sleep(2000)
  // ? Fecha de la actuación
  await page.evaluate(() => {
    const allInputDate =
      document.querySelectorAll<HTMLInputElement>("#documents_support")
    allInputDate[1].click()
  })
  await page.keyboard.press("Enter")

  // await sleep(300)
  // ? Fecha para la audiencia de conciliación
  await page.evaluate(() => {
    const allInputDate =
      document.querySelectorAll<HTMLInputElement>("#documents_support")
    allInputDate[2].click()
  })
  await page.keyboard.press("Enter")
  //solicitud de la conciliacion
  await sleep(1000)
  await page.keyboard.press("Tab")
  await page.keyboard.press("Tab")
  await page.keyboard.press("Enter")
  await page.keyboard.press("Enter")

  await autoScroll(page, 3)

  await page.type("#story", loremImpsun)

  await page.click(".documentos-soporte-btn")
  await page.waitForSelector(".control-input-button input")
  await sleep(1000)
  console.log("Escribiendo texto")
  await page.type(".control-input-button input", "20198002189322")
  await sleep(50)
  await page.keyboard.press("Tab")
  await sleep(50)
  await page.keyboard.press("Enter")
  await sleep(100)
  await page.waitForNetworkIdle()
  await sleep(300)
  await page.click(".button-cerrar")
  await sleep(500)
  await page.click('button[type="submit"]')
  await page.waitForSelector(".button-save", { timeout: 10000 })
  await page.click(".button-save")
}
