import { NextRequest, NextResponse } from "next/server";

abstract class BaseController<Data> {
  protected readonly request: NextRequest;

  constructor(request: NextRequest) {
    this.request = request;
  }

  abstract getServiceData(): Promise<Data>;

  async GET(): Promise<Response> {
    const parsedWorkoutData = await this.getServiceData();

    return NextResponse.json(parsedWorkoutData);
  }
}

export default BaseController;
