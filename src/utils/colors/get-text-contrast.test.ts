import { getTextContrast } from "./get-text-contrast"
import { black, white } from "@/styles/colors/_exports.module.scss"

describe("getTextContrast", () => {
    it("should return the correct contrast for a given color", () => {
        expect(getTextContrast("#ffffff")).toEqual(black)
        expect(getTextContrast("#000000")).toEqual(white)
        expect(getTextContrast("#ff0000")).toEqual(white)
        expect(getTextContrast("#00ff00")).toEqual(black)
        expect(getTextContrast("#0000ff")).toEqual(white)
        expect(getTextContrast("#ffff00")).toEqual(black)
        expect(getTextContrast("#00ffff")).toEqual(black)
        expect(getTextContrast("#ff00ff")).toEqual(white)
    })
})
