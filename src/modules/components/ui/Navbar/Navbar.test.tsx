import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";
import { toKebabCase } from "@/modules/strings/transform";
import Navbar from "./Navbar";
import { pages } from "./routes";

const useRouterMock = useRouter as jest.Mock;

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Navbar", () => {
  let mockPush: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/docs",
      push: mockPush,
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

  it("should render an svg logo element", () => {
    const { getByTestId } = render(<Navbar />);
    const logo = getByTestId("nav-logo");
    expect(logo).toBeTruthy();
  });

  it("should display the active page name", () => {
    (useRouterMock as jest.Mock).mockReturnValueOnce({
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

    act(() => {
      fireEvent.click(menuButton);
    });

    const menu = getByTestId("nav-menu");
    expect(menu).toBeVisible();
  });

  it("should close the menu when a menu item is clicked", async () => {
    const { getByTestId, queryByTestId } = render(<Navbar />);
    const menuButton = getByTestId("nav-menu-button");

    act(() => {
      fireEvent.click(menuButton);
    });

    const menuItem = getByTestId("nav-menu-item-home");

    act(() => {
      fireEvent.click(menuItem);
    });

    await waitFor(() => {
      const menu = queryByTestId("nav-menu");
      expect(menu).not.toBeVisible();
    });
  });

  it("should have <a> tags with all the path in the routes", async () => {
    const { getByTestId, getAllByTestId } = render(<Navbar />);
    const menuButton = getByTestId("nav-menu");

    act(() => {
      fireEvent.click(menuButton);
    });

    await waitFor(() => {
      const links = getAllByTestId(/^nav-menu-link-.*$/);

      expect(links).toHaveLength(pages.length);

      links.forEach((link, index) => {
        const { path } = pages[index];
        expect(link).toHaveAttribute("href", path);
      });
    });
  });

  it("should render all menu items", () => {
    const { getByTestId } = render(<Navbar />);
    const menuButton = getByTestId("nav-menu-button");

    act(() => {
      fireEvent.click(menuButton);
    });

    pages.forEach(({ name }) => {
      const menuItem = getByTestId(`nav-menu-item-${toKebabCase(name)}`);
      expect(menuItem).toBeTruthy();
    });
  });
});
