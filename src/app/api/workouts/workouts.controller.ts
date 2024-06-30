import { NextRequest } from "next/server";
import { WorkoutsData } from "@/modules/model/rest/routes/workouts/outputs/workoutsDataSchemas";
import { WorkoutsService } from "./workouts.service";
import BaseController from "./base.controller";

class WorkoutsController extends BaseController<WorkoutsData> {
  private readonly workoutsService: WorkoutsService;

  constructor(request: NextRequest) {
    super(request);
    this.workoutsService = new WorkoutsService(request);
  }

  async getServiceData() {
    return this.workoutsService.getServiceData();
  }
}

export default WorkoutsController;
