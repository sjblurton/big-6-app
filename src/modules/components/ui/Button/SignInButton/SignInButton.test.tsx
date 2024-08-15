import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { signIn } from "next-auth/react";
import SignInButton from "./SignInButton";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

const buttonName = "Google Login";

describe("SignInButton", () => {
  it("should render", async () => {
    render(<SignInButton />);
    expect(await screen.findByText(buttonName)).toBeInTheDocument();
  });

  it('should call the signIn with "google" when button is clicked', () => {
    render(<SignInButton />);

    const button = screen.getByRole("button", { name: buttonName });

    fireEvent.click(button);

    expect(signIn).toHaveBeenCalledWith("google", {
      callbackUrl: "/dashboard",
    });

    expect(signIn).toHaveBeenCalledTimes(1);
  });
});
