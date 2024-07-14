import { NextRequest } from "next/server";
import { WorkoutsData } from "@/modules/model/api/routes/workouts/outputs/workoutsDataSchemas";
import { WorkoutsService } from "../services/workouts.service";
import Controller from "../../data-layer/controller";

class WorkoutsController extends Controller<WorkoutsData> {
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
