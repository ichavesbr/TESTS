const longestString = (word1, word2) => {
  if (word2.trim().length > word1.trim().length) return word2

  return word1
}

const isPrime = num => {
  if (typeof num !== "number") throw new Error("O valor deve ser um número!!")
  if (num <= 1) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }

  return true
}

export { longestString, isPrime }
