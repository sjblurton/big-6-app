import React from "react"
import { render, fireEvent, act, waitFor } from "@testing-library/react"
import { usePathname } from "next/navigation"
import { toKebabCase } from "@/modules/strings/transform"
import Navbar from "./Navbar"

const pages = [
    { name: "Home", path: "/" },
    { name: "Docs", path: "/docs" },
    { name: "API Docs", path: "/docs/api" },
    { name: "Test Coverage", path: "/docs/test-coverage" },
]

jest.mock("next/navigation", () => ({
    usePathname: jest.fn(),
}))

const mockUsePathname = usePathname as jest.Mock

describe("Navbar", () => {
    beforeEach(() => {
        jest.clearAllMocks()
        jest.resetModules()
        pages.pop()
        mockUsePathname.mockReturnValue("/docs")
    })

    it("should render successfully", () => {
        const { baseElement } = render(<Navbar routes={pages} />)
        expect(baseElement).toBeTruthy()
    })

    it("should render a header element", () => {
        const { getByRole } = render(<Navbar routes={pages} />)
        const header = getByRole("banner")
        expect(header).toBeTruthy()
    })

    it("should render an svg logo element", () => {
        const { getByTestId } = render(<Navbar routes={pages} />)
        const logo = getByTestId("nav-logo")
        expect(logo).toBeTruthy()
    })

    it("should display the active page name", () => {
        pages.push({ name: "Docs", path: "/docs" })
        const { getByTestId } = render(<Navbar routes={pages} />)
        const activePage = getByTestId("nav-active-page")
        expect(activePage).toHaveTextContent("Docs")
    })

    it("should open the menu when the menu button is clicked", () => {
        const { getByTestId } = render(<Navbar routes={pages} />)
        const menuButton = getByTestId("nav-menu-button")

        act(() => {
            fireEvent.click(menuButton)
        })

        const menu = getByTestId("nav-menu")
        expect(menu).toBeVisible()
    })

    it("should close the menu when a menu item is clicked", async () => {
        pages.push({ name: "Home", path: "/" })
        const { getByTestId, queryByTestId } = render(<Navbar routes={pages} />)
        const menuButton = getByTestId("nav-menu-button")

        act(() => {
            fireEvent.click(menuButton)
        })

        const menuItem = getByTestId("nav-menu-item-home")

        act(() => {
            fireEvent.click(menuItem)
        })

        await waitFor(() => {
            const menu = queryByTestId("nav-menu")
            expect(menu).not.toBeVisible()
        })
    })

    it("should have <a> tags with all the path in the routes", async () => {
        pages.push({ name: "Home", path: "/" })
        const { getByTestId, getAllByTestId } = render(
            <Navbar routes={pages} />
        )
        const menuButton = getByTestId("nav-menu")

        act(() => {
            fireEvent.click(menuButton)
        })

        await waitFor(() => {
            const links = getAllByTestId(/^nav-menu-link-.*$/)

            expect(links).toHaveLength(pages.length)

            links.forEach((link, index) => {
                const { path } = pages[index]
                expect(link).toHaveAttribute("href", path)
            })
        })
    })

    it("should render all menu items", () => {
        pages.push({ name: "Home", path: "/" })
        const { getByTestId } = render(<Navbar routes={pages} />)
        const menuButton = getByTestId("nav-menu-button")

        act(() => {
            fireEvent.click(menuButton)
        })

        pages.forEach(({ name }) => {
            const menuItem = getByTestId(`nav-menu-item-${toKebabCase(name)}`)
            expect(menuItem).toBeTruthy()
        })
    })

    it("should handle empty pages array", async () => {
        const { getByTestId, queryAllByTestId } = render(<Navbar routes={[]} />)
        const menuButton = getByTestId("nav-menu-button")

        act(() => {
            fireEvent.click(menuButton)
        })

        const links = queryAllByTestId(/^nav-menu-link-.*$/)
        expect(links).toHaveLength(0)
    })

    it("should handle a pathname that is not in the routes", () => {
        mockUsePathname.mockReturnValueOnce("/not-found")

        const { getByTestId } = render(<Navbar routes={pages} />)
        const activePage = getByTestId("nav-active-page")
        expect(activePage).toHaveTextContent("")
    })
})
