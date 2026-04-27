import { describe, expect, it, test } from "vitest"
import { longestString, isPrime } from "../src/example1"

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

describe("examples.isPrime", () => {
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
