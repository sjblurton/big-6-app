import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { signOut } from "next-auth/react";
import SignOutButton from "./SignOutButton";

jest.mock("next-auth/react", () => ({
  signOut: jest.fn(),
}));

describe("SignOutButton", () => {
  it("should render", async () => {
    render(<SignOutButton />);
    expect(await screen.findByText("Sign out")).toBeInTheDocument();
  });

  it("should call the signOut when button is clicked", () => {
    render(<SignOutButton />);

    const button = screen.getByRole("button", { name: /sign out/i });

    fireEvent.click(button);

    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
