import { WorkoutsData } from "@/modules/model/api/routes/workouts/outputs/workoutsDataSchemas";
import AuthService from "../../data-layer/auth.service";

export class WorkoutsService extends AuthService<WorkoutsData> {
  async getServiceData() {
    return this.getWorkoutData.getWorkoutsData();
  }
}
