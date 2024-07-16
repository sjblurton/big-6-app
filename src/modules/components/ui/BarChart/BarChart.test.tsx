import React from "react";
import { render, screen } from "@testing-library/react";
import { secondaryLight } from "@/styles/colors/_exports.module.scss";
import BarChart from "./BarChart";
import { MuiBarChart } from "../../library/muix";

jest.mock("../../library/muix", () => ({
  MuiBarChart: jest.fn(() => <div data-testid="muibarchart" />),
}));

describe("BarChart", () => {
  const reps = [10, 20, 30, 40];

  it("renders without crashing", () => {
    render(<BarChart reps={reps} />);
    expect(screen.getByTestId("muibarchart")).toBeInTheDocument();
  });

  it("passes the correct props to MuiBarChart", () => {
    render(<BarChart reps={reps} />);
    expect(MuiBarChart).toHaveBeenCalledWith(
      expect.objectContaining({
        desc: "A bar chart showing the number of sets an reps completed for the day.",
        xAxis: [
          { scaleType: "band", data: reps.map((_, i) => `Set: ${i + 1}`) },
        ],
        series: [{ data: reps, color: secondaryLight }],
      }),
      {},
    );
  });
});
