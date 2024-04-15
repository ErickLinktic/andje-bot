import { Page } from "puppeteer"
import { sleep } from "./sleep"
import { randomNumber } from "./randomNumber"

export async function typeOnNgSelect(
  page: Page,
  selector: string,
  text: string,
  delay = 500,
  disableAutoClick = false,
  randomUntil?: number
) {
  await sleep(delay)

  // ?  Forma presentacion
  await page.type(`${selector} input`, text)
  await page.waitForSelector(".ng-option-marked.ng-option", { timeout: 10000 })
  await sleep(delay)
  if (!disableAutoClick) {
    await page.click(".ng-option-marked.ng-option")
  }

  if (randomUntil && disableAutoClick) {
    const random = randomNumber(randomUntil)
    console.log("Numeron random: ", random)

    for (let i = 0; i < random; i++) {
      await sleep(10)
      await page.keyboard.press("ArrowDown")
    }

    await sleep(500)
    await page.keyboard.press("Enter")
  }
}
