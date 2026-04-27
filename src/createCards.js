// retorn um array
const createCards = ({ suits, values }) => {
  if (!Array.isArray(suits) || !Array.isArray(values)) {
    throw new TypeError("suits and values must be arrays")
  }

  if (suits.length !== 4 || values.length !== 13) {
    throw new RangeError("suits and values must be standarts lenghts (4 and 13)")
  }

  let cards = []

  for (const suit of suits) {
    for (const value of values) {
      cards.push(`${value} of ${suit}`)
    }
  }

  return cards
}

export { createCards }
