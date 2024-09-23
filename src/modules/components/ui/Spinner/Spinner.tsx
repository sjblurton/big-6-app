"use client"

import Circle from "../../assets/Circle/Circle"
import useIncrementalValue, {
    type UseIncrementalValueSpeed,
} from "./hooks/use-incremental-value"

type Props = {
    speed: UseIncrementalValueSpeed
}

function Spinner({ speed }: Props) {
    const dashOffsetValue = useIncrementalValue(speed)

    return <Circle dashOffsetValue={dashOffsetValue} />
}

export default Spinner
