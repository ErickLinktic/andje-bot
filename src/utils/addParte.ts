import { Page } from "puppeteer"
import { autoScroll } from "./autoScroll"
import { typeOnNgSelect } from "./typeOnNgSelect"
import { sleep } from "./sleep"
import { IConfig } from "../interfaces/config.types"

export async function addParte(page: Page, type?: IConfig["mode"], total = 2) {
  // ? Get entidad name from localstorage
  const entidad = await page.evaluate(() => {
    return localStorage.getItem("ENTIDAD_NOMBRE")!.replace(/"/g, "")
  })

  await autoScroll(page, 5)
  console.log("Entró a añadir parte")

  // ? Add otra parte
  if (type === "full") {
    await typeOnNgSelect(page, "#partes_tipo_de_parte", "OTRA PARTE")
    await typeOnNgSelect(page, "#partes_calidad", "CONVOCANTE")
    await typeOnNgSelect(
      page,
      "#partes_tipo_de_identificacion",
      "CEDULA DE CIUDADANIA"
    )
    await page.type("#partes_identificacion", "11")
    await page.keyboard.press("Tab")
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

    await page.keyboard.press("Enter")
  }

  for (let i = 0; i < total; i++) {
    await sleep(500)
    console.log("Se entro al flujo: ", i + 1)
    await typeOnNgSelect(page, "#partes_tipo_de_parte", "ENTIDAD")
    await typeOnNgSelect(
      page,
      "#partes_calidad",
      i !== 1 ? "CONVOCANTE" : "CONVOCADO"
    )

    await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

    await typeOnNgSelect(
      page,
      "#partes_entidad",
      i !== 1 ? "ADMINISTRADORA COLOMBIANA DE PENSIONES" : entidad,
      500,
      Boolean(i === 1)
    )

    if (i === 1) {
      console.log("Se busca la entidad")
      await page.evaluate(() => {
        const entidad_ = localStorage
          .getItem("ENTIDAD_NOMBRE")!
          .replace(/"/g, "")
        const allOptions = document.querySelectorAll<HTMLSpanElement>(
          '#partes_entidad div[role="option"]'
        )

        allOptions.forEach((span) => {
          if (span.innerText === entidad_) {
            span.click()
          }
        })
      })
    }

    await sleep(200)
    await page.keyboard.press("Tab")
    await page.keyboard.press("Enter")
  }

  // ? Add contraparte
  if (type === "full") {
    await typeOnNgSelect(
      page,
      "#contraparte_tipo_de_documento",
      "CEDULA DE CIUDADANIA"
    )
    await page.type("#contraparte_identificacion", "11")
    await page.keyboard.press("Tab")
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

    await page.keyboard.press("Enter")
  }
}
