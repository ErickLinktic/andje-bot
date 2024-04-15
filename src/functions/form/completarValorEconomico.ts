import { Page } from "puppeteer"
import { typeOnNgSelect } from "../../utils/typeOnNgSelect"
import { IConfig } from "../../interfaces/config.types"
import { sleep } from "../../utils/sleep"
import { autoScroll } from "../../utils/autoScroll"

export async function completarValorEconomico(
  page: Page,
  type?: IConfig["mode"]
) {
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

  if (type !== "full") {
    // ? Valor economico
    await typeOnNgSelect(page, "#valor_economico", "INDETERMINADO")

    // ? Genera erogación económica
    await typeOnNgSelect(page, "#genera_erogacion_economica", "NACIONAL")

    await page.type("#valorIndeterminado", "100")

    await page.click('button[type="submit"]')
  } else {
    // ? Valor economico
    await typeOnNgSelect(page, "#valor_economico", "DETERMINADO")

    // ? Genera erogación económica
    await typeOnNgSelect(page, "#genera_erogacion_economica", "NACIONAL")

    // ? Tipo de pretension
    await typeOnNgSelect(
      page,
      "#tipo_pretension",
      "DAÑO INMATERIAL - DAÑO A LA SALUD"
    )

    // ? Unidad monetaria
    await typeOnNgSelect(page, "#unidad_monetaria", "DOLARES")
    await page.type("#valor", "100")
    await sleep(50)
    await page.keyboard.press("Tab")
    await sleep(50)
    await page.keyboard.press("Enter")

    await autoScroll(page, 9)

    // ? Juramento estomatorio Unidad monetaria
    await typeOnNgSelect(page, "#juramento_unidad_monetaria", "DOLARES")
    await page.type("#juramento_valor", "100")
    await sleep(50)
    await page.keyboard.press("Tab")
    await sleep(50)
    await page.keyboard.press("Enter")

    await sleep(50)
    await page.click('button[type="submit"]')
  }
}
