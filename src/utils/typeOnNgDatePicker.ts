import { Page } from "puppeteer"
import { sleep } from "./sleep"

export async function typeOnNgDatePicker(
  page: Page,
  selector: string,
  // text: string,
  delay = 300
) {
  await sleep(delay)

  // ?  Forma presentacion
  await page.waitForSelector(selector)
  await page.click(selector)
  await sleep(delay)
  await page.keyboard.press("Enter")
}
