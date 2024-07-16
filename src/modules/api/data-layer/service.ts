import { NextRequest } from "next/server";

abstract class Service<Data> {
  protected readonly request: NextRequest;

  constructor(request: NextRequest) {
    this.request = request;
  }

  abstract getData(): Promise<Data>;
}

export default Service;
