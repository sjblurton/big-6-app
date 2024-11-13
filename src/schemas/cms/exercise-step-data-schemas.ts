import { z } from "zod"

import { imageSchema } from "@/libs/cms/schemas/base-schemas"

import { stepSchema } from "./step-schemas"

export const exerciseStepDataSchema = z.object({
    name: z.string(),
    image: imageSchema,
    step: stepSchema,
})
