import { describe, expect, it, test } from "vitest"
import { longestString, isPrime } from "../src/example"

describe("examples.longestString", () => {
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

describe("examples.isPrime test 1", () => {
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

describe("examples.isPrime test 2", () => {
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
