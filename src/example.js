// verifica qual a maior palavra
const longestString = (word1, word2) => {
  if (word2.trim().length > word1.trim().length) return word2

  return word1
}

// verifica se é número primo
const isPrime = num => {
  if (typeof num !== "number") throw new Error("O valor deve ser um número!!")
  if (!Number.isInteger(num)) return false
  if (num <= 1) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }

  return true
}

// retorna o valor do envio
const shippingCost = (weight, coupon = "") => {
  // faz verificação manual porque não está usando Typescript
  if (typeof weight !== "number") throw new Error("Weight must be a number")
  if (typeof coupon !== "string") throw new Error("Coupon must be a string")
  if (weight <= 0) throw new Error("Weight must be greater than 0")

  if (coupon === "FREESHIPPING") return 0

  if (weight <= 1) return 3.99
  if (weight <= 5) return 5.99
  if (weight <= 20) return 8.99

  return 14.99
}

export { longestString, isPrime, shippingCost }
