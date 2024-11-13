import { groq } from "next-sanity"

class CmsGroqQueries {
    private readonly OMIT_DRAFTS_QUERY = "!(_id in path('drafts.**'))"
    private readonly EXERCISE_DOCUMENT = "'exercise-document'"

    workoutIdsQuery() {
        return groq`
                *[_type == ${this.EXERCISE_DOCUMENT} && ${this.OMIT_DRAFTS_QUERY}]{
                    _id,
                    name,
                    "image":{
                        ...image,
                        "lqip": image.asset->metadata.lqip
                    }
                }
            `
    }

    workoutDocumentQuery(id: string) {
        return groq`
                *[_type == ${this.EXERCISE_DOCUMENT} && ${this.OMIT_DRAFTS_QUERY} && _id == "${id}"][0]
            `
    }

    workoutStepQuery(id: string, step: number) {
        return groq`
                *[_type == ${this.EXERCISE_DOCUMENT} && ${this.OMIT_DRAFTS_QUERY} && _id == "${id}"][0]{
                    name,
                    image,
                    "step": steps[step == ${step}][0]
                }
            `
    }
}

export const cmsGroqQueries = new CmsGroqQueries()
