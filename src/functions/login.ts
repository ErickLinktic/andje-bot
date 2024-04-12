import { Page } from "puppeteer"
import { config } from "../config"

export async function login(page: Page) {
  await page.waitForNetworkIdle({
    idleTime: 500, // ? time in milliseconds to wait after the last network request finishes
    timeout: 5000, // ? maximum time in milliseconds to wait
  })

  await page.waitForSelector("#formLogin > #loginForm #tipoDoc")
  await page.click("#formLogin > #loginForm #tipoDoc")

  await page.select("#formLogin > #loginForm #tipoDoc", "CC")

  await page.waitForSelector("#loginForm #document-number")
  await page.click("#loginForm #document-number")
  await page.keyboard.press("Backspace")
  await page.type("#loginForm #document-number", config.user)
  await page.waitForSelector("#loginForm #password")
  await page.click("#loginForm #password")
  await page.type("#loginForm #password", config.password)

  await page.waitForSelector(".login-panel > #formLogin > #loginForm #send")
  await page.click(".login-panel > #formLogin > #loginForm #send")
}
