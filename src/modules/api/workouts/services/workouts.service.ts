import AuthService from "../../data-layer/auth.service"

export class WorkoutsService extends AuthService {
    getServiceData() {
        return this.getWorkoutData.getWorkoutsData()
    }
}
