import { describe, expect, it } from "vitest"
import { loadDeck } from "../src/loadDeck"

describe("loadDeck", () => {
  it("returns a Promise that resolves", async () => {
    const result = loadDeck()

    expect(result).toBeInstanceOf(Promise)
    await expect(result).resolves.toBeDefined()
  })

  it("resolves a { suits[4], values[13] } deck", async () => {
    const deck = await loadDeck()

    expect(typeof deck).toBe("object")

    expect(deck).toHaveProperty("suits")
    expect(deck).toHaveProperty("values")

    expect(Array.isArray(deck.suits)).toBe(true)
    expect(Array.isArray(deck.values)).toBe(true)

    expect(deck.suits).toHaveLength(4)
    expect(deck.values).toHaveLength(13)
  })

  it("supports another id, e.g. 'pokemon'", async () => {
    const deck = await loadDeck("pokemon")

    expect(deck.suits).toHaveLength(4)
    expect(deck.values).toHaveLength(13)
  })

  it("rejects with an error for unkown ids", async () => {
    const deck = loadDeck("uknown-id")

    await expect(deck).rejects.toThrow(/not found/i)
  })
})
