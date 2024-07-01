import { render } from "@testing-library/react";
import DocsHomePage from "./page";

describe("DocsHomePage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DocsHomePage />);
    expect(baseElement).toBeTruthy();
  });

  it("should render the title", () => {
    const { getByText } = render(<DocsHomePage />);
    expect(getByText("Documentation")).toBeTruthy();
  });
});
