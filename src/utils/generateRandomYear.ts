export function generateRandomYear() {
  const minYear = 1985
  const maxYear = 2024
  // Generate a random number between minYear and maxYear, inclusive
  return String(Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear)
}
