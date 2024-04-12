import { KeyInput, Page } from "puppeteer"
import { typeOnNgSelect } from "../../utils/typeOnNgSelect"
import { sleep } from "../../utils/sleep"
import { typeOnNgDatePicker } from "../../utils/typeOnNgDatePicker"
import { addParte } from "../../utils/addParte"
import { addVictima } from "../../utils/addVictima"

export async function completarInformacionBasica(page: Page) {
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

  await sleep(1000)

  // ? Autoridad que conoce
  await typeOnNgSelect(page, "#autoridad_que_conoce", "PROCURADURIA")

  // ? Jurisdiccion que conoce
  await typeOnNgSelect(page, "#jurisdiccion", "CONTENCIOSO")

  // ?  Forma presentacion
  await typeOnNgSelect(page, "#forma_de_presentacion", "CONJUNTA")

  // ?  Acción o Media de control
  await typeOnNgSelect(
    page,
    "#accion_de_medios_de_control",
    "CONTROVERSIAS CONTRACTUALES"
  )
  // ? Fecha de presentación
  await typeOnNgDatePicker(page, "#fecha_de_presentacion")

  const documento_id = "20198002189312".split("")
  await page.click(".documentos-soporte-btn")
  await sleep(500)
  documento_id.map(async (num) => await page.keyboard.press(num as KeyInput))
  await page.keyboard.press("Tab")
  await page.keyboard.press("Enter")
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })
  await page.click(".button-cerrar")
  await sleep(500)

  /**
   * * Add partes
   */
  await addParte(page)

  /**
   * * Add victimas
   */
  await addVictima(page)
}
