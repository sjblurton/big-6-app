import { render } from "@testing-library/react";
import Circle from "./Circle";

describe("Circle", () => {
  it("should render the component", () => {
    const { container } = render(<Circle dashOffsetValue={0} />);
    expect(container).toBeDefined();
  });

  it("should render the text Reps text if provided", () => {
    const { container } = render(
      <Circle
        dashOffsetValue={0}
        text={{ goal: 100, reps: 50, percent: 50 }}
      />,
    );
    expect(container).toHaveTextContent("Reps: 50");
  });

  it("should render the text Goal text if provided", () => {
    const { container } = render(
      <Circle
        dashOffsetValue={0}
        text={{ goal: 100, reps: 50, percent: 50 }}
      />,
    );
    expect(container).toHaveTextContent("Goal: 100");
  });

  it("should render the text percentage if provided the text prop", () => {
    const { container } = render(
      <Circle
        dashOffsetValue={0}
        text={{ goal: 100, reps: 50, percent: 50 }}
      />,
    );
    expect(container).toHaveTextContent("50%");
  });

  it("should not render the text if the text prop is not provided", () => {
    const { container } = render(<Circle dashOffsetValue={0} />);
    expect(container).not.toHaveTextContent("50%");
  });
});
