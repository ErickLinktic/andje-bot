import { Page } from "puppeteer"
import { typeOnNgSelect } from "../../utils/typeOnNgSelect"

export async function completarValorEconomico(page: Page) {
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

  // ? Valor economico
  await typeOnNgSelect(page, "#valor_economico", "INDETERMINADO")

  // ? Genera erogación económica
  await typeOnNgSelect(page, "#genera_erogacion_economica", "NACIONAL")

  await page.type("#valor", "100")

  await page.click('button[type="submit"]')
}
