import { Page } from "puppeteer"

export async function goToHome(page: Page) {
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

  await page.waitForSelector("#id-68", { timeout: 10000 })
  await page.click("#id-68")
}
