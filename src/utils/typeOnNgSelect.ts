import { Page } from "puppeteer"
import { sleep } from "./sleep"

export async function typeOnNgSelect(
  page: Page,
  selector: string,
  text: string,
  delay = 300
) {
  await sleep(delay)

  // ?  Forma presentacion
  await page.waitForSelector(`${selector} .ng-arrow-wrapper`)
  await page.type(`${selector} input`, text)
  await page.waitForSelector(".ng-option-marked.ng-option", { timeout: 10000 })
  await sleep(delay)
  await page.click(".ng-option-marked.ng-option")
}
