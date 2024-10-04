import { groq } from "next-sanity"

import { routineDocumentSchema } from "./routine-schemas"

import CmsBaseClient from "../shared/base-client"

class CmsClient extends CmsBaseClient {
    private ROUTINE_DOCUMENT = "'routine-document'"

    async getRoutineDocuments() {
        return routineDocumentSchema.array().parseAsync(
            await this.fetch(groq`
            *[_type == ${this.ROUTINE_DOCUMENT} && ${this._queryOmitDrafts}]{
                ...,
                days[]{
                    ...,
                    exercises[]->{
                    _key,
                    image,
                    name
                    }
                }
            }
        `)
        )
    }
}

const routineCmsClient = new CmsClient()

export default routineCmsClient
