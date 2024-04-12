import { Page } from "puppeteer"
import { generateSevenRandomDigits } from "../utils/generateRandomDigits"
import { generateRandomYear } from "../utils/generateRandomYear"

export async function consultar(page: Page) {
  await page.waitForSelector(
    ".col-4 > .item-box > .ng-star-inserted > .data-box:nth-child(2) > .a-decoration"
  )
  await page.click(
    ".col-4 > .item-box > .ng-star-inserted > .data-box:nth-child(2) > .a-decoration"
  )

  await page.waitForSelector(".container-fluid #year_field")
  await page.click(".container-fluid #year_field")
  await page.type(".container-fluid #year_field", generateRandomYear())
  await page.waitForSelector(".container-fluid #consecutivo_field")
  await page.click(".container-fluid #consecutivo_field")
  await page.type(
    ".container-fluid #consecutivo_field",
    generateSevenRandomDigits()
  )

  await page.waitForSelector(
    ".ng-star-inserted > .container-fluid > .row > .container-fluid > .py-3"
  )
  await page.click(
    ".ng-star-inserted > .container-fluid > .row > .container-fluid > .py-3"
  )

  await page.waitForSelector(".row #btnConsultar")
  await page.click(".row #btnConsultar")

  await page.waitForSelector(".row #btnConsultar")
  await page.click(".row #btnConsultar")
}
