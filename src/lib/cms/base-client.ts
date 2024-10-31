import { createClient } from "next-sanity"

import {
    apiVersion,
    dataset,
    projectId,
} from "../../features/cms/config/environment"

const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})

abstract class CmsBaseClient {
    protected readonly _apiClient = sanityClient
    protected readonly _queryOmitDrafts = "!(_id in path('drafts.**'))"

    protected async fetch<Data>(query: string): Promise<Data> {
        return this._apiClient.fetch(query)
    }
}

export default CmsBaseClient
