"use client"

import React, { useState } from "react"

import Card from "./Card/Card"
import Title from "./Title/Title"

import { type RoutineDocument } from "../../schemas/routine-schemas"

function Routine({ routines }: { routines: RoutineDocument[] }) {
    const [active, setActive] = useState(0)
    const title = routines[active].name
    const days = routines[active].days

    return (
        <>
            <Title
                list={{ max: routines.length - 1, active }}
                setActive={setActive}
                title={title}
            />
            {days.map((day) => (
                <Card key={day._key} day={day} />
            ))}
        </>
    )
}

export default Routine
