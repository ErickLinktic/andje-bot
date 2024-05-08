export function randomDate(): string {
  const startDate = new Date(2023, 0, 1)
  const endDate = new Date(2024, 4, 30)

  const randomDays =
    Math.floor(
      (Math.random() * (endDate.getTime() - startDate.getTime())) /
        (1000 * 60 * 60 * 24)
    ) + 1
  const randomDate = new Date(
    startDate.getTime() + randomDays * (1000 * 60 * 60 * 24)
  )

  const year = randomDate.getFullYear()
  const month = (randomDate.getMonth() + 1).toString().padStart(2, "0")
  const day = randomDate.getDate().toString().padStart(2, "0")

  return `${year}-${month}-${day}`
}
