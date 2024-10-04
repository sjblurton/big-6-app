import { z } from "zod"

export const documentBaseSchema = z.object({
    _createdAt: z.string(),
    _id: z.string(),
    _rev: z.string(),
    _updatedAt: z.string(),
})

export const imageSchema = z.object({
    _type: z.literal("image"),
    asset: z.object({
        _ref: z.string(),
        _type: z.string(),
    }),
})

export type ImageAsset = z.infer<typeof imageSchema>
