import { http, HttpResponse } from "msw"

import { workoutGroqQueries } from "@/modules/cms/queries/workout-queries"

import { workoutIdsAndImages } from "../mocks/workout-ids-and-images"

export const sanityMocks = [
    http.get(
        "https://wnnwcpmb.apicdn.sanity.io/v2024-09-24/data/query/production",
        ({ request }) => {
            const url = new URL(request.url)
            const query = url.searchParams.get("query")

            if (query === workoutGroqQueries.workoutIdsQuery()) {
                return HttpResponse.json(workoutIdsAndImages)
            }
            return new HttpResponse("No Matching Query", { status: 400 })
        }
    ),
]
