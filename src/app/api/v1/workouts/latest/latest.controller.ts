import { type NextRequest, NextResponse } from "next/server"
import LatestService from "./lastest.service"

class LatestController {
    request: NextRequest

    constructor(request: NextRequest) {
        this.request = request
    }

    static async GET() {
        return NextResponse.json(await LatestService.getLatest())
    }
}

export default LatestController
