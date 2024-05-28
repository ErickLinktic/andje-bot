import dotenv from "dotenv"
import { Page } from "puppeteer"
import { IConfig } from "../../interfaces/config.types"
import { addActosAdministrativos } from "../../utils/addActosAdministrativos"
import { addParte } from "../../utils/addParte"
import { addVictima } from "../../utils/addVictima"
import { sleep } from "../../utils/sleep"
import { typeOnNgDatePicker } from "../../utils/typeOnNgDatePicker"
import { typeOnNgSelect } from "../../utils/typeOnNgSelect"
dotenv.config()
const { total_parts, save_document } = process.env

export async function completarInformacionBasica(
  page: Page,
  type?: IConfig["mode"]
) {
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })
  await sleep(2000)
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

  if (save_document === "y") {
    await uploadFile(page, ".btn-examinar", "D:Videos/test.pdf")
    await sleep(7000)
  } else {
    await page.waitForSelector(".control-input-button input")
    await sleep(1000)
    await page.click(".control-input-button input")
    await page.type(".control-input-button input", "20198002189312")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Enter")
  }

  await page.waitForNetworkIdle({ idleTime: 500, timeout: 60000 })
  await page.click(".button-cerrar")
  await sleep(500)

  /**
   * * Add partes
   */
  await addParte(page, type, Number(total_parts))

  /**
   * * Add victimas
   */
  if (type === "full") await addVictima(page)

  /**
   * * Registro de actos administrativos
   */
  if (type === "full") await addActosAdministrativos(page)

  await sleep(600)
  await page.click('.btn_consult_and_clean button[type="submit"]')
}

async function uploadFile(page: Page, selector: string, filePath: string) {
  await sleep(1000)
  await page.click(".btn-examinar")
  const fileChooser = await page.waitForFileChooser()
  await fileChooser.accept([filePath]) // Accept the chosen file
}
