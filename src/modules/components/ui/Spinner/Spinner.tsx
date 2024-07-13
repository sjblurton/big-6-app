"use client";

import Circle from "../Circle/Circle";
import useIncrementalValue, {
  UseIncrementalValueSpeed,
} from "./hooks/useIncrementalValue";

type Props = {
  speed: UseIncrementalValueSpeed;
};

function Spinner({ speed }: Props) {
  const dashOffsetValue = useIncrementalValue(speed);

  return <Circle dashOffsetValue={dashOffsetValue} />;
}

export default Spinner;
