import React from "react";
import { render, screen } from "@testing-library/react";
import LineChart from "./LineChart";
import { mockLineChartArgs } from "./LineChart.stories";

jest.mock("../../library/muix", () => ({
  MuiLineChart: jest.fn(() => <div data-testid="mui-line-chart" />),
}));

describe("LineChart", () => {
  it("renders without crashing", () => {
    render(<LineChart data={mockLineChartArgs} />);
    expect(screen.getByTestId("mui-line-chart")).toBeInTheDocument();
  });
});
