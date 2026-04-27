import { describe, expect, it, test } from "vitest"
import { longestString, isPrime, shippingCost } from "../src/example"

describe("example.longestString", () => {
  it("returns the logest word", () => {
    const longest = longestString("pikachu", "snorlax")

    expect(longest).toBe("pikachu")
  })

  it("returns the first word when both are of equal length", () => {
    expect(longestString("ditto", "pidgy")).toBe("ditto")
  })

  it("handle empty strings", () => {
    expect(longestString("", "mario")).toBe("mario")
    expect(longestString("luigi", "")).toBe("luigi")
    expect(longestString("", "")).toBe("")
  })

  it("ignore leading/trailing whitespace", () => {
    expect(longestString("    ash  ", "misty")).toBe("misty")
  })
})

describe("example.isPrime test 1", () => {
  test("returns true/truthy for small prime numbers", () => {
    expect(isPrime(2)).toBe(true)
    expect(isPrime(3)).toBe(true)
    expect(isPrime(5)).toBeTruthy()
  })

  test("returns false/falsy for non-prime numbers", () => {
    expect(isPrime(1)).toBe(false)
    expect(isPrime(0)).toBe(false)
    expect(isPrime(4)).toBeFalsy()
  })

  test("matches results in an array using toEqual", () => {
    const numbers = [2, 3, 4, 5]
    const results = numbers.map(isPrime)

    expect(results).toEqual([true, true, false, true])
  })

  test("detects primes within a filtered list", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    const primes = numbers.filter(isPrime)

    expect(primes).toContain(3)
    expect(primes).not.toContain(4)
  })

  test("throws an error when passed a non-number", () => {
    // isPrime retorna true ou false, só aceita number, resultado boolean

    // teste passa porque espera lançar erro (enviou string e não number)
    const badCall = () => isPrime("pikachu")

    // teste falha porque espera lançar erro (enviou número, tá correto e não lança erro)
    // const badCall = () => isPrime(5)

    // ambos fazem a mesma coisa, tanto faz, com mensagem é mais específico
    expect(badCall).toThrow()
    expect(badCall).toThrow("O valor deve ser um número!!")
  })

  test("has correct type for result", () => {
    // ambos fazem a mesma coisa, tanto faz
    expect(isPrime(7)).toBeTypeOf("boolean")
    expect(typeof isPrime(8)).toBe("boolean")
  })
})

describe("example.isPrime test 2", () => {
  it("treats 0 and 1 as non-prime, and 2 as prime", () => {
    expect(isPrime(0)).toBe(false)
    expect(isPrime(1)).toBe(false)
    expect(isPrime(2)).toBe(true)
  })

  it("returns false all even numbers > 2", () => {
    expect(isPrime(4)).toBe(false)
    expect(isPrime(10)).toBe(false)
    expect(isPrime(100)).toBe(false)
  })

  it("identifies common primes", () => {
    expect(isPrime(3)).toBe(true)
    expect(isPrime(5)).toBe(true)
  })

  it("returns false for perfect squares reliably", () => {
    expect(isPrime(49)).toBe(false)
    expect(isPrime(121)).toBe(false)
  })

  it("returns false for non-integers", () => {
    expect(isPrime(2.5)).toBe(false)
  })

  it("throws an error for non-number inputs", () => {
    const badCall = () => isPrime("pikachu")

    expect(badCall).toThrow()
    expect(badCall).toThrow("O valor deve ser um número!!")
  })
})

describe("example.shippingCost", () => {
  it("returns a number", () => {
    expect(shippingCost(2)).toBeTypeOf("number")
  })

  // versão 1: boa para poucos casos
  it("charges correct prices for interior weights", () => {
    expect(shippingCost(0.5)).toBe(3.99)
    expect(shippingCost(3)).toBe(5.99)
    expect(shippingCost(10)).toBe(8.99)
    expect(shippingCost(50)).toBe(14.99)
  })

  // versão 2: boa para vários casos
  it.each([
    { weight: 0.5, expected: 3.99 },
    { weight: 3, expected: 5.99 },
    { weight: 20, expected: 8.99 },
    { weight: 21, expected: 14.99 },
  ])("charges $expected for weight $weight", ({ weight, expected }) => {
    expect(shippingCost(weight)).toBe(expected)
  })

  // testar boundary versão 1
  it("charges correct prices for interior weights", () => {
    expect(shippingCost(1)).toBe(3.99) // upper bound of first tier
    expect(shippingCost(5)).toBe(5.99) // upper bound of second tier
    expect(shippingCost(20)).toBe(8.99) // upper bound of third tier
    expect(shippingCost(21)).toBe(14.99) // above third tier
  })

  // testar boundary versão 2
  it.each([
    { weight: 1, expected: 3.99 },
    { weight: 5, expected: 5.99 },
    { weight: 20, expected: 8.99 },
    { weight: 21, expected: 14.99 },
  ])("charges correct tiers at boundaries: $weight => $expected ", ({ weight, expected }) => {
    expect(shippingCost(weight)).toBe(expected)
  })

  it("applies FRESHIPPING coupon exactly", () => {
    expect(shippingCost(1, "FREESHIPPING")).toBe(0)
    expect(shippingCost(21, "FREESHIPPING")).toBe(0)
  })

  it("ignores non-matching coupons", () => {
    expect(shippingCost(1, "freeshipping")).toBe(3.99)
    expect(shippingCost(1, "NOTHING")).toBe(3.99)
    expect(shippingCost(1)).toBe(3.99)
  })

  it("throws an error for invalid weights", () => {
    // quando testa lançamento de erros deve-se usar expect(() => shippingCost(...)) e nao expect(shippingCost(...))
    expect(() => shippingCost(0)).toThrow("Weight must be greater than 0")
    expect(() => shippingCost(-5)).toThrow("Weight must be greater than 0")
    expect(() => shippingCost("2")).toThrow("Weight must be a number")
  })

  it("throws an error when coupon is not a string", () => {
    // usa regex para procurar por "coupon" em qualquer lugar da mensagem
    expect(() => shippingCost(1, 123).toThrow(/coupon/i))
    expect(() => shippingCost(1, null).toThrow(/coupon/i))
  })
})
