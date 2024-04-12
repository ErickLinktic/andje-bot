export function generateSevenRandomDigits() {
  let result = ""
  for (let i = 0; i < 7; i++) {
    const digit = Math.floor(Math.random() * 10)
    result += digit.toString()
  }
  return String(result)
}
