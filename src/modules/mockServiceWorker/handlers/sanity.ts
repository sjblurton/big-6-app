import { http, HttpResponse } from "msw"
import { workoutTypes } from "@/modules/model/workout/workout-schemas"
import { sanityPullUpMock } from "../mocks/pull-up"

export const sanityMocks = [
    http.get(
        "https://wnnwcpmb.api.sanity.io/v2024-09-24/data/query/production",
        ({ request }) => {
            const url = new URL(request.url)
            const query = url.searchParams.get("query")

            if (query?.includes(workoutTypes.pullUp.id)) {
                return HttpResponse.json({ ...sanityPullUpMock })
            }
            return new HttpResponse(null, { status: 404 })
        }
    ),
]
