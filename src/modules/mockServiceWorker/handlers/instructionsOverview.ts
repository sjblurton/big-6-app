import {
    WORKOUT_ID_LIST,
    WorkoutIds,
} from "@/modules/model/api/routes/shared/workoutIds"
import { http, HttpResponse } from "msw"

const createInstructionsLevelNames = (id: WorkoutIds) =>
    new Array(10).fill(null).map((_, index) => `Level ${index + 1} ${id}`)

function createInstructionsOverviewHandler(id: WorkoutIds) {
    return http.get(
        `http://localhost:3000/api/v1/docs/instructions/${id}`,
        () =>
            HttpResponse.json({
                title: id,
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo nemo
        quidem reprehenderit. Nesciunt obcaecati facilis, magnam placeat
        perspiciatis ea vitae! Earum voluptatibus placeat fuga nobis quis
        dolore. At, reiciendis!`,
                levelNames: createInstructionsLevelNames(id),
            })
    )
}

export const instructionsOverviewHandlers = WORKOUT_ID_LIST.map((id) =>
    createInstructionsOverviewHandler(id)
)
