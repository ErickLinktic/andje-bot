import { Page } from "puppeteer"
import { autoScroll } from "./autoScroll"
import { typeOnNgSelect } from "./typeOnNgSelect"
import { sleep } from "./sleep"

export async function addParte(page: Page, total = 2) {
  // ? Get entidad name from div section
  const entidad = await page.evaluate(() => {
    const div = document.querySelector(".ek-etiqueta-seccion") as HTMLDivElement
    return div?.textContent?.trim() ?? "MINISTERIO DE DEFENSA NACIONAL"
  })
  // ? Get entidad id from storage
  const entidad_id = await page.evaluate(() => {
    return localStorage.getItem("ENTIDAD_ID") ?? ("" as string)
  })

  console.log("Entidad de usuario autenticado: ", Number(entidad_id))

  await autoScroll(page, 5)
  console.log("Entró a añadir parte")
  for (let i = 0; i < total; i++) {
    await sleep(500)
    console.log("Se entro al flujo: ", i + 1)
    await typeOnNgSelect(page, "#partes_tipo_de_parte", "ENTIDAD")
    await typeOnNgSelect(page, "#partes_calidad", "CONVOCANTE")
    await typeOnNgSelect(
      page,
      "#partes_entidad",
      i !== 1 ? "ADMINISTRADORA COLOMBIANA DE PENSIONES" : entidad
    )

    await sleep(200)
    await page.keyboard.press("Tab")
    await page.keyboard.press("Enter")
  }
}