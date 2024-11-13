import { groq } from "next-sanity"

import { type WeekDay, weekDayValues } from "@/constants/strings/week-days"
import CmsBaseClient from "@/libs/cms/clients/base-client"
import { type ImageAsset } from "@/libs/cms/schemas/base-schemas"

import {
    type RoutineDay,
    type RoutineDocument,
    routineDocumentSchema,
} from "../schemas/routine-schemas"

class CmsClient extends CmsBaseClient {
    private ROUTINE_DOCUMENT = "'routine-document'"

    private createRestDayData(
        image: ImageAsset,
        dayOfTheWeek: WeekDay
    ): RoutineDay {
        return {
            name: dayOfTheWeek,
            _key: dayOfTheWeek,
            exercises: [
                {
                    _id: "rest",
                    image,
                    name: "rest",
                },
            ],
        }
    }

    private async getRoutineCmsDocuments(): Promise<RoutineDocument[]> {
        return routineDocumentSchema.array().parseAsync(
            await this.fetch(groq`
            *[_type == ${this.ROUTINE_DOCUMENT} && ${this._queryOmitDrafts}]{
                ...,
                days[]{
                    ...,
                    exercises[]->{
                    _id,
                    image,
                    name
                    }
                }
            }
        `)
        )
    }

    private sortDays(days: RoutineDay[]): RoutineDay[] {
        return days.sort(
            (a, b) =>
                weekDayValues.indexOf(a.name) - weekDayValues.indexOf(b.name)
        )
    }

    private mapRoutineDays(routine: RoutineDocument) {
        const routineDaysMap = new Map(
            routine.days.map((day) => [day.name, day])
        )

        return weekDayValues.map(
            (dayOfTheWeek) =>
                routineDaysMap.get(dayOfTheWeek) ??
                this.createRestDayData(routine.rest, dayOfTheWeek)
        )
    }

    private validateRoutineDays(days: RoutineDay[]) {
        if (days.length !== 7) {
            throw new Error("Routine must have 7 days")
        }
    }

    private transformRoutine(routine: RoutineDocument) {
        const days = this.mapRoutineDays(routine)
        this.validateRoutineDays(days)

        return {
            ...routine,
            days: this.sortDays(days),
        }
    }

    private getFullWeekRoutines(
        routines: RoutineDocument[]
    ): RoutineDocument[] {
        return routines.map((routine) => this.transformRoutine(routine))
    }

    async getRoutineDocuments(): Promise<RoutineDocument[]> {
        const routines = await this.getRoutineCmsDocuments()

        return this.getFullWeekRoutines(routines)
    }
}

const routineCmsClient = new CmsClient()

export default routineCmsClient
