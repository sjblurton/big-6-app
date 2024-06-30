import { WorkoutsData } from "@/modules/model/rest/routes/workouts/outputs/workoutsDataSchemas";
import BaseService from "./base.service";

export class WorkoutsService extends BaseService<WorkoutsData> {
  async getServiceData() {
    return this.getWorkoutData.getWorkoutsData(12);
  }
}
