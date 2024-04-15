import { Page } from "puppeteer"
import { sleep } from "./sleep"

export async function typeOnNgDatePicker(
  page: Page,
  selector: string,
  // text: string,
  delay = 500
) {
  await sleep(delay)

  // ?  Forma presentacion
  await page.waitForSelector(selector, { timeout: 15000 })
  await page.click(selector)
  await sleep(delay)
  await page.keyboard.press("Enter")
}
