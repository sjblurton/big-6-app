import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { signOut } from "next-auth/react"
import SignOutButton from "./SignOutButton"

jest.mock("next-auth/react", () => ({
    signOut: jest.fn(),
}))

const buttonName = "Sign Out"

describe("SignOutButton", () => {
    it("should render", async () => {
        render(<SignOutButton />)
        expect(await screen.findByText(buttonName)).toBeInTheDocument()
    })

    it("should call the signOut when button is clicked", () => {
        render(<SignOutButton />)

        const button = screen.getByRole("button", { name: buttonName })

        fireEvent.click(button)

        expect(signOut).toHaveBeenCalledTimes(1)
    })
})
