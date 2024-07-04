import { WorkoutsData } from "@/modules/model/api/routes/workouts/outputs/workoutsDataSchemas";
import BaseService from "../../baseClasses/base.service";

export class WorkoutsService extends BaseService<WorkoutsData> {
  async getServiceData() {
    return this.getWorkoutData.getWorkoutsData();
  }
}
