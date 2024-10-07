"use client"

import useIncrementalValue, {
    type UseIncrementalValueSpeed,
} from "./hooks/use-incremental-value"

import Circle from "../../assets/Circle/Circle"

type Properties = {
    speed: UseIncrementalValueSpeed
}

function Spinner({ speed }: Properties) {
    const dashOffsetValue = useIncrementalValue(speed)

    return <Circle dashOffsetValue={dashOffsetValue} />
}

export default Spinner
