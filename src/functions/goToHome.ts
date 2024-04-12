import { Page } from "puppeteer"
import { sleep } from "../utils/sleep"
import { config } from "../config"

export async function goToHome(page: Page) {
  await sleep(1000)
  await page.goto(config.basePath.concat("inicio/extrajudiciales/home"), {
    waitUntil: "networkidle0",
  })
}
