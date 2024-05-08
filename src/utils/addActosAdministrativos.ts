import { Page } from "puppeteer"
import { loremImpsun } from "./loremImpsun"
import { generateSevenRandomDigits } from "./generateRandomDigits"
import { randomNumber } from "./randomNumber"

export async function addActosAdministrativos(page: Page) {
  await page.click(".fields_6 button:nth-child(1)")
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })
  await page.waitForSelector("#tipo_de_acto", { timeout: 10000 })
  await page.click("#tipo_de_acto")
  await page.keyboard.press("Enter")
  const random = randomNumber(11)
  console.log("Numeron random: ", random)

  for (let i = 0; i < random; i++) {
    await page.keyboard.press("ArrowDown")
  }

  await page.keyboard.press("Enter")

  await page.type("#numero_de_acto", generateSevenRandomDigits())

  await page.click("#fecha_de_expedicion")
  await page.keyboard.press("Enter")

  await page.type("#observacion", loremImpsun)
  await page.click("#numero_de_acto")
  await page.keyboard.press("Enter")
}
