import { Page } from "puppeteer"

export async function formPasoUnoHappyPath(page: Page) {
  await page.waitForNetworkIdle({
    idleTime: 500, // time in milliseconds to wait after the last network request finishes
    timeout: 60000, // maximum time in milliseconds to wait
  })

  await page.waitForSelector(
    ".fields_2 > .autoridad_que_conoce > #autoridad_que_conoce > .ng-select-container > .ng-arrow-wrapper"
  )
  await page.click(
    ".fields_2 > .autoridad_que_conoce > #autoridad_que_conoce > .ng-select-container > .ng-arrow-wrapper"
  )

  await page.type(
    'input[aria-autocomplete="list"]',
    "PROCURADURIA 1 DELEGADA ANTE EL CONSEJO DE ESTAD"
  )
  // await page.waitForSelector('.autocomplete-suggestion'); // Update selector to match your autocomplete suggestions

  // await page.waitForSelector('#ad01c436f882 > .ng-dropdown-panel-items > div > #ad01c436f882-3 > .ng-star-inserted')
  // await page.click('#ad01c436f882 > .ng-dropdown-panel-items > div > #ad01c436f882-3 > .ng-star-inserted')

  // await page.waitForSelector('section > #form #fecha_de_presentacion')
  // await page.click('section > #form #fecha_de_presentacion')

  // await page.waitForSelector('.ngb-dp-month > ngb-datepicker-month > .ngb-dp-week:nth-child(3) > .ngb-dp-day:nth-child(5) > .btn-light')
  // await page.click('.ngb-dp-month > ngb-datepicker-month > .ngb-dp-week:nth-child(3) > .ngb-dp-day:nth-child(5) > .btn-light')

  // await page.waitForSelector('#jurisdiccion > .ng-select-container > .ng-value-container > .ng-input > input')
  // await page.click('#jurisdiccion > .ng-select-container > .ng-value-container > .ng-input > input')

  // await page.waitForSelector('#jurisdiccion > #adb265552b88 #adb265552b88-2')
  // await page.click('#jurisdiccion > #adb265552b88 #adb265552b88-2')

  // await page.waitForSelector('#form > .fields_2 > .accion_de_medios_de_control > #accion_de_medios_de_control > .ng-select-container')
  // await page.click('#form > .fields_2 > .accion_de_medios_de_control > #accion_de_medios_de_control > .ng-select-container')

  // await page.waitForSelector('#ab41e5ced141 > .ng-dropdown-panel-items > div > #ab41e5ced141-0 > .ng-star-inserted')
  // await page.click('#ab41e5ced141 > .ng-dropdown-panel-items > div > #ab41e5ced141-0 > .ng-star-inserted')

  // await page.waitForSelector('#forma_de_presentacion > .ng-select-container > .ng-value-container > .ng-input > input')
  // await page.click('#forma_de_presentacion > .ng-select-container > .ng-value-container > .ng-input > input')

  // await page.waitForSelector('#forma_de_presentacion > #a48b1af71659 #a48b1af71659-1')
  // await page.click('#forma_de_presentacion > #a48b1af71659 #a48b1af71659-1')

  // await page.waitForSelector('#partes_tipo_de_parte > .ng-select-container > .ng-value-container > .ng-input > input')
  // await page.click('#partes_tipo_de_parte > .ng-select-container > .ng-value-container > .ng-input > input')

  // await page.waitForSelector('#partes_tipo_de_parte > #ae9acbd49b5c #ae9acbd49b5c-0')
  // await page.click('#partes_tipo_de_parte > #ae9acbd49b5c #ae9acbd49b5c-0')

  // await page.waitForSelector('.fields_3 > .ng-invalid > .partes_calidad > #partes_calidad > .ng-select-container')
  // await page.click('.fields_3 > .ng-invalid > .partes_calidad > #partes_calidad > .ng-select-container')

  // await page.waitForSelector('#ad8214afdb03 > .ng-dropdown-panel-items > div > #ad8214afdb03-0 > .ng-star-inserted')
  // await page.click('#ad8214afdb03 > .ng-dropdown-panel-items > div > #ad8214afdb03-0 > .ng-star-inserted')

  // await page.waitForSelector('#partes_entidad > .ng-select-container > .ng-value-container > .ng-input > input')
  // await page.click('#partes_entidad > .ng-select-container > .ng-value-container > .ng-input > input')

  // await page.waitForSelector('#aa94b946c37e > .ng-dropdown-panel-items > div > #aa94b946c37e-470 > .ng-star-inserted')
  // await page.click('#aa94b946c37e > .ng-dropdown-panel-items > div > #aa94b946c37e-470 > .ng-star-inserted')

  // await page.waitForSelector('#form > .fields_3 > .ng-invalid > .add_btn > button')
  // await page.click('#form > .fields_3 > .ng-invalid > .add_btn > button')

  // await page.waitForSelector('#partes_tipo_de_parte > .ng-select-container > .ng-value-container > .ng-input > input')
  // await page.click('#partes_tipo_de_parte > .ng-select-container > .ng-value-container > .ng-input > input')

  // await page.waitForSelector('#ae9acbd49b5c > .ng-dropdown-panel-items > div > #ae9acbd49b5c-0 > .ng-star-inserted')
  // await page.click('#ae9acbd49b5c > .ng-dropdown-panel-items > div > #ae9acbd49b5c-0 > .ng-star-inserted')

  // await page.waitForSelector('#partes_calidad > .ng-select-container > .ng-value-container > .ng-input > input')
  // await page.click('#partes_calidad > .ng-select-container > .ng-value-container > .ng-input > input')

  // await page.waitForSelector('#partes_calidad > #ad8214afdb03 #ad8214afdb03-1')
  // await page.click('#partes_calidad > #ad8214afdb03 #ad8214afdb03-1')

  // await page.waitForSelector('#partes_entidad > .ng-select-container > .ng-value-container > .ng-input > input')
  // await page.click('#partes_entidad > .ng-select-container > .ng-value-container > .ng-input > input')

  // await page.waitForSelector('#partes_entidad > #a8103867810a #a8103867810a-3')
  // await page.click('#partes_entidad > #a8103867810a #a8103867810a-3')

  // await page.waitForSelector('#form > .fields_3 > .ng-invalid > .add_btn > button')
  // await page.click('#form > .fields_3 > .ng-invalid > .add_btn > button')
}
