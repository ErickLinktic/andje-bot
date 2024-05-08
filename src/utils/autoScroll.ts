import { Page } from "puppeteer"

export async function autoScroll(page: Page, maxScrolls: number) {
  await page.evaluate(async (maxScrolls) => {
    await new Promise((resolve) => {
      let totalHeight = 0
      let scrolls = 0
      const distance = 100
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight
        window.scrollBy(0, distance)
        totalHeight += distance
        scrolls++

        if (
          totalHeight >= scrollHeight - window.innerHeight ||
          scrolls >= maxScrolls
        ) {
          clearInterval(timer)
          resolve(resolve)
        }
      }, 100)
    })
  }, maxScrolls)
}
