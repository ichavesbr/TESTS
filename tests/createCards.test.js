import { describe, expect, it } from "vitest"
import { createCards } from "../src/createCards"

describe("createCards", () => {
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
  const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

  it("returns an array", () => {
    const cards = createCards({ suits, values })

    expect(Array.isArray(cards)).toBe(true)
  })

  it("creates a deck of 52 cards", () => {
    const cards = createCards({ suits, values })

    expect(cards).toHaveLength(52)
  })

  it("throws an error if suits or values are not standart lenghts", () => {
    expect(() => createCards({ suits: ["Hearts"], values })).toThrow(/4/)
    expect(() => createCards({ suits, values: ["1", "2"] })).toThrow(/13/)
  })

  it("throws an error if suits or values are not arrays", () => {
    expect(() => createCards({ suits: "not an array", values })).toThrow()
    expect(() => createCards({ suits, values: "not an array" })).toThrow()
  })
})
