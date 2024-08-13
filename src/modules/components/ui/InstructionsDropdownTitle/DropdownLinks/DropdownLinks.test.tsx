import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import DropdownLinks from "./DropdownLinks"; // Adjust the import path as necessary

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("DropdownLinks", () => {
  const options = [
    { label: "Option 1", href: "/option1" },
    { label: "Option 2", href: "/option2" },
    { label: "Option 3", href: "/option3" },
  ];

  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with default index", () => {
    render(<DropdownLinks options={options} defaultIndex={1} />);

    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("opens and displays menu options when the toggle button is clicked", () => {
    render(<DropdownLinks options={options} defaultIndex={0} />);

    expect(screen.queryByText("Option 2")).toBeNull();

    const toggleButton = screen.getByLabelText("Option 1");
    fireEvent.click(toggleButton);

    expect(screen.getByText("Option 2")).toBeVisible();
    expect(screen.getByText("Option 3")).toBeVisible();
  });

  it("changes the selected option and calls router.push when a menu item is clicked", () => {
    render(<DropdownLinks options={options} defaultIndex={0} />);

    const toggleButton = screen.getByLabelText("Option 1");
    fireEvent.click(toggleButton);

    const secondOption = screen.queryAllByText("Option 2");
    fireEvent.click(secondOption[0]);

    expect(push).toHaveBeenCalledWith("/option2");
  });
});
