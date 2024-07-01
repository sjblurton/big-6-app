import { renderHook } from "@testing-library/react";
import { testCoverageSummarySchema } from "@/modules/model/test-coverage/testCoverageJsonSchema";
import useCoverageData from "./useCoverageData";

describe("useCoverageData", () => {
  it("should return coverage data", () => {
    const { result } = renderHook(() => useCoverageData());
    expect(result.current).toBeDefined();
  });

  it("should return coverage data with the correct shape", () => {
    expect.assertions(1);
    const { result } = renderHook(() => useCoverageData());

    const data = testCoverageSummarySchema.array().parse(result.current);

    expect(data).toBeTruthy();
  });
});
