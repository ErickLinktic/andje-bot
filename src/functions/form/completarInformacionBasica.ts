import { Page } from "puppeteer"
import { typeOnNgSelect } from "../../utils/typeOnNgSelect"
import { sleep } from "../../utils/sleep"
import { typeOnNgDatePicker } from "../../utils/typeOnNgDatePicker"

export async function completarInformacionBasica(page: Page) {
  await page.waitForNetworkIdle({
    idleTime: 500, // time in milliseconds to wait after the last network request finishes
    timeout: 60000, // maximum time in milliseconds to wait
  })

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
}
