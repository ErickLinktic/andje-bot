import { Page } from "puppeteer"
import { config } from "../config"

export async function login(page: Page) {
  await page.waitForSelector("#tipoDoc", { visible: true, timeout: 10000 })
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
