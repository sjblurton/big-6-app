import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { signIn } from "next-auth/react";
import SignInButton from "./SignInButton";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("SignInButton", () => {
  it("should render", async () => {
    render(<SignInButton />);
    expect(await screen.findByText("Sign in with google")).toBeInTheDocument();
  });

  it('should call the signIn with "google" when button is clicked', () => {
    render(<SignInButton />);

    const button = screen.getByRole("button", { name: /sign in with google/i });

    fireEvent.click(button);

    expect(signIn).toHaveBeenCalledWith("google", {
      callbackUrl: "/dashboard",
    });

    expect(signIn).toHaveBeenCalledTimes(1);
  });
});
