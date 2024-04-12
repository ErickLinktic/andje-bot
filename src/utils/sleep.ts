/**
 * Pausa la ejecución durante el número especificado de segundos.
 * @param {number} seconds - El número de segundos que se va a esperar.
 * @returns {Promise<void>} Una promesa que se resuelve después de esperar el tiempo especificado.
 */
async function sleep(seconds: number) {
  console.log(`sleeping ${seconds} secs`)
  await new Promise((resolve) => setTimeout(resolve, seconds))
}
