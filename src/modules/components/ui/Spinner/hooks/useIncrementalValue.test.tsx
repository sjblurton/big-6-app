import { act, renderHook } from "@testing-library/react";
import useIncrementalValue from "./useIncrementalValue";

const SPEED = { slow: 500, medium: 1000, fast: 2000 } as const;

describe("useIncrementalValue", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it.each(Object.keys(SPEED) as (keyof typeof SPEED)[])(
    "should increment value correctly for speed %s",
    (speed) => {
      const { result } = renderHook(() => useIncrementalValue(speed));

      expect(result.current).toBe(0);

      act(() => {
        jest.advanceTimersByTime(70);
      });

      expect(result.current).toBeCloseTo(SPEED[speed] / 70);

      act(() => {
        jest.advanceTimersByTime(70);
      });

      expect(result.current).toBeCloseTo((SPEED[speed] / 70) * 2);
    },
  );

  it("should stop counting when component unmounts", () => {
    const timeoutSpy = jest.spyOn(global, "clearTimeout");
    const { result, unmount } = renderHook(() => useIncrementalValue("fast"));

    expect(result.current).toBe(0);

    act(() => {
      jest.advanceTimersByTime(140);
    });

    expect(result.current).toBeCloseTo((SPEED.fast / 70) * 2);

    act(() => {
      unmount();
    });

    jest.runOnlyPendingTimers();

    expect(timeoutSpy).toHaveBeenCalled();
  });
});
