import { Page } from "puppeteer"

export async function goToHome(page: Page) {
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

  await page.waitForSelector(
    ".ek-menu-lateral > .sidebar > .ng-star-inserted:nth-child(6) > .ng-star-inserted > span"
  )
  await page.click(
    ".ek-menu-lateral > .sidebar > .ng-star-inserted:nth-child(6) > .ng-star-inserted > span"
  )

  await page.waitForSelector(
    ".ek-menu-lateral > .sidebar > .expanded > .ng-star-inserted > span"
  )
  await page.click(
    ".ek-menu-lateral > .sidebar > .expanded > .ng-star-inserted > span"
  )

  await page.waitForSelector(
    ".sidebar > .expanded > .sub > .ng-star-inserted:nth-child(1) > .ng-star-inserted"
  )
  await page.click(
    ".sidebar > .expanded > .sub > .ng-star-inserted:nth-child(1) > .ng-star-inserted"
  )
}
