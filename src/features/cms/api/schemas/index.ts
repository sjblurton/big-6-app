import { type SchemaTypeDefinition } from "sanity"

import routineType from "./routine/type"
import exerciseType from "./workout/type"

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [exerciseType, routineType],
}
