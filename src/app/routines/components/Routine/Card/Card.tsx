import Image from "next/image"

import { urlFor } from "@/modules/cms/client/image"
import { type RoutineDay } from "@/modules/cms/client/routine/routine-schemas"
import { MuiGrid, MuiTypography } from "@/modules/components/library/mui"
import { toCapitalizedWords } from "@/modules/strings/transform"
import * as background from "@/styles/utilityClasses/background.module.scss"
import * as boxShadow from "@/styles/utilityClasses/box-shadow.module.scss"

import { wrapper } from "./Card.module.scss"

function Card({ day }: { day: RoutineDay }) {
    return (
        <MuiGrid
            container
            marginBlock={1}
            marginInline="auto"
            justifyContent="space-between"
            alignItems="center"
            className={`${wrapper} ${background.light} ${boxShadow.subtle}`}
        >
            <MuiGrid item>
                <MuiTypography variant="h5" component="h2">
                    {toCapitalizedWords(day.name)}
                </MuiTypography>
            </MuiGrid>
            <MuiGrid item>
                {day.exercises.map(({ image, _id, name }) => {
                    const height = _id === "rest" ? 40 : 80
                    return (
                        <Image
                            key={_id}
                            src={urlFor(image).width(80).height(height).url()}
                            width={80}
                            height={height}
                            alt={`Art work of a person doing a hard level of the exercise ${name}`}
                        />
                    )
                })}
            </MuiGrid>
        </MuiGrid>
    )
}

export default Card
