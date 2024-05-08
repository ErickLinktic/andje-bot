import { KeyInput, Page } from "puppeteer"
import { typeOnNgSelect } from "../../utils/typeOnNgSelect"
import { sleep } from "../../utils/sleep"
import { typeOnNgDatePicker } from "../../utils/typeOnNgDatePicker"
import { addParte } from "../../utils/addParte"
import { addVictima } from "../../utils/addVictima"
import { IConfig } from "../../interfaces/config.types"
import { addActosAdministrativos } from "../../utils/addActosAdministrativos"

export async function completarInformacionBasica(
  page: Page,
  type?: IConfig["mode"]
) {
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })

  // ? Autoridad que conoce
  await typeOnNgSelect(page, "#autoridad_que_conoce", "P", 500, true, 10)

  // ? Jurisdiccion que conoce
  await typeOnNgSelect(page, "#jurisdiccion", " ", 500, true, 3)

  // ?  Forma presentacion
  await typeOnNgSelect(page, "#forma_de_presentacion", " ", 500, true, 2)

  // ?  Acción o Media de control
  await typeOnNgSelect(page, "#accion_de_medios_de_control", " ", 500, true, 4)
  // ? Fecha de presentación
  await typeOnNgDatePicker(page, "#fecha_de_presentacion")

  await page.click(".documentos-soporte-btn")
  await page.waitForSelector(".control-input-button input")
  await page.click(".control-input-button input")
  await page.type(".control-input-button input", "20198002189312")
  await page.keyboard.press("Tab")
  await page.keyboard.press("Enter")
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })
  await page.click(".button-cerrar")
  await sleep(500)

  /**
   * * Add partes
   */
  await addParte(page, type)

  /**
   * * Add victimas
   */
  await addVictima(page)

  /**
   * * Registro de actos administrativos
   */
  await addActosAdministrativos(page)

  await sleep(600)
  await page.click('.btn_consult_and_clean button[type="submit"]')
}
