"use client"

import { useState } from "react"

import { type RoutineDocument } from "@/modules/cms/client/routine/routine-schemas"

import Card from "../Card/Card"

function Routine({ routines }: { routines: RoutineDocument[] }) {
    const [active, setActive] = useState(0)
    const title = routines[active].name
    const days = routines[active].days

    return (
        <div>
            {active !== 0 ? (
                <button
                    type="button"
                    onClick={() =>
                        setActive((curr) => {
                            if (curr === 0) {
                                return 0
                            }
                            return curr - 1
                        })
                    }
                >
                    back
                </button>
            ) : null}
            {active !== routines.length - 1 ? (
                <button
                    type="button"
                    onClick={() =>
                        setActive((curr) => {
                            if (curr === routines.length - 1) {
                                return routines.length - 1
                            }
                            return curr + 1
                        })
                    }
                >
                    next
                </button>
            ) : null}
            <h1>{title}</h1>
            {days.map((day) => (
                <Card key={day._key} day={day} />
            ))}
        </div>
    )
}

export default Routine
