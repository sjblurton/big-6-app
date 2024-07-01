import { fireEvent, render, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

import { pages } from "./routes";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Navbar", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    });
  });

  it("should render successfully", () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });

  it("should render a header element", () => {
    const { getByRole } = render(<Navbar />);
    const header = getByRole("banner");
    expect(header).toBeTruthy();
  });

  it("should render a svg logo element", () => {
    const { getByTestId } = render(<Navbar />);
    const logo = getByTestId("nav-logo");
    expect(logo).toBeTruthy();
  });

  it("should display the active page name", () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/docs",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    });

    const { getByTestId } = render(<Navbar />);
    const activePage = getByTestId("nav-active-page");
    expect(activePage).toHaveTextContent("Docs");
  });

  it("should open the menu when the menu button is clicked", () => {
    const { getByTestId } = render(<Navbar />);
    const menuButton = getByTestId("nav-menu-button");
    fireEvent.click(menuButton);

    const menu = getByTestId("nav-menu");
    expect(menu).toBeVisible();
  });

  it("should close the menu when a menu item is clicked", () => {
    const { getByTestId, queryByTestId } = render(<Navbar />);
    const menuButton = getByTestId("nav-menu-button");
    fireEvent.click(menuButton);

    const menuItem = getByTestId("nav-menu-item-Home");
    fireEvent.click(menuItem);

    waitFor(() => {
      const menu = queryByTestId("nav-menu");
      expect(menu).not.toBeVisible();
    });
  });

  it("should render all menu items", () => {
    const { getByTestId } = render(<Navbar />);
    const menuButton = getByTestId("nav-menu-button");
    fireEvent.click(menuButton);

    pages.forEach(({ name }) => {
      const menuItem = getByTestId(`nav-menu-item-${name}`);
      expect(menuItem).toBeTruthy();
    });
  });
});
