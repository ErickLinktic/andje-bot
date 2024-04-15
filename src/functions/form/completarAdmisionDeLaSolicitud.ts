import { KeyInput, Page } from "puppeteer"
import { sleep } from "../../utils/sleep"
import { loremImpsun } from "../../utils/loremImpsun"
import { autoScroll } from "../../utils/autoScroll"

export async function completarAdmisionDeLaSolicitud(page: Page) {
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })
  await sleep(500)

  // ? Fecha de la actuación
  await page.evaluate(() => {
    const allInputDate =
      document.querySelectorAll<HTMLInputElement>("#documents_support")
    allInputDate[1].click()
  })
  await sleep(100)
  await page.keyboard.press("Enter")

  await sleep(200)

  // ? Fecha para la audiencia de conciliación
  await page.evaluate(() => {
    const allInputDate =
      document.querySelectorAll<HTMLInputElement>("#documents_support")
    allInputDate[2].click()
  })
  await sleep(100)
  await page.keyboard.press("Enter")
  await sleep(200)

  await page.keyboard.press("Tab")
  await sleep(50)
  await page.keyboard.press("Enter")
  await sleep(50)
  await page.keyboard.press("Enter")

  await autoScroll(page, 3)

  await sleep(100)
  await page.type("#story", loremImpsun)
  await sleep(100)

  const documento_id = "20198002189312".split("")
  await page.click(".documentos-soporte-btn")
  await sleep(500)
  documento_id.map(async (num) => await page.keyboard.press(num as KeyInput))
  await page.keyboard.press("Tab")
  await page.keyboard.press("Enter")
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })
  await page.click(".button-cerrar")
  await sleep(500)
  await page.click('button[type="submit"]')
  await page.waitForSelector(".button-save", { timeout: 10000 })
  await sleep(50)
  await page.click(".button-save")
}
