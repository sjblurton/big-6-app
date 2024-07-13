"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Props = {
  start: number;
  end: number;
  duration?: number;
};

function useCountUp({ end, start, duration = 2000 }: Props) {
  const [value, setValue] = useState<number>(start);
  const currentValueRef = useRef<number>(start);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInitRender = useRef(true);

  const interval = 70;
  const steps = duration / interval;
  const increment = (end - start) / steps;

  const updateValue = useCallback(() => {
    currentValueRef.current += increment;
    setValue(currentValueRef.current);
  }, [increment]);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const countUp = useCallback(() => {
    if (start === end) {
      setValue(end);
      return;
    }
    if (isInitRender.current) {
      isInitRender.current = false;
      timeoutRef.current = setTimeout(countUp, interval);
      return;
    }
    updateValue();

    const hasEnded =
      (increment > 0 && currentValueRef.current >= end) ||
      (increment < 0 && currentValueRef.current <= end);

    if (hasEnded) {
      setValue(end);
      clearTimer();
      return;
    }

    timeoutRef.current = setTimeout(countUp, interval);
  }, [start, end, increment, interval, updateValue, clearTimer]);

  useEffect(() => {
    timeoutRef.current = setTimeout(countUp, interval);
    return () => {
      clearTimer();
    };
  }, [countUp, interval, clearTimer]);

  return Math.round(value);
}

export default useCountUp;
