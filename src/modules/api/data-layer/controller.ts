import { NextRequest, NextResponse } from "next/server";

abstract class Controller<Data> {
  protected readonly request: NextRequest;

  constructor(request: NextRequest) {
    this.request = request;
  }

  abstract getServiceData(): Promise<Data>;

  async GET(): Promise<Response> {
    const parsedData = await this.getServiceData();

    return NextResponse.json(parsedData);
  }
}

export default Controller;
