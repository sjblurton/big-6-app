import { act, renderHook } from "@testing-library/react";
import useCountUp from "./useCountUp";

describe("useCountUp", () => {
  const props = {
    start: 0,
    end: 100,
    duration: 1000,
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should start counting at the start prop", () => {
    const { result } = renderHook(() => useCountUp(props));
    expect(result.current).toBe(props.start);
  });

  it("should move the value towards the end prop after each interval", () => {
    const { result } = renderHook(() => useCountUp(props));

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(
      result.current < props.end && result.current > props.start,
    ).toBeTruthy();
  });

  it("should stop counting when the end prop is reached", () => {
    const { result } = renderHook(() => useCountUp(props));

    act(() => {
      jest.advanceTimersByTime(props.duration * 100);
    });

    expect(result.current).toBe(props.end);
  });

  it("should clear the timer when the component is unmounted", () => {
    const timeoutSpy = jest.spyOn(global, "clearTimeout");
    const { unmount } = renderHook(() => useCountUp(props));

    act(() => {
      unmount();
    });

    expect(timeoutSpy).toHaveBeenCalled();
  });

  it("should handle if start is greater than end", () => {
    const { result } = renderHook(() =>
      useCountUp({ ...props, start: 100, end: 0 }),
    );

    act(() => {
      jest.advanceTimersByTime(props.duration * 100);
    });

    expect(result.current).toBe(0);
  });
});
