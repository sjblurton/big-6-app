export const weekDays = {
    monday: { title: "Monday", value: "monday" },
    tuesday: { title: "Tuesday", value: "tuesday" },
    wednesday: { title: "Wednesday", value: "wednesday" },
    thursday: { title: "Thursday", value: "thursday" },
    friday: { title: "Friday", value: "friday" },
    saturday: { title: "Saturday", value: "saturday" },
    sunday: { title: "Sunday", value: "sunday" },
} as const

export type WeekDay = (typeof weekDays)[keyof typeof weekDays]["value"]

export const weekDayValues = Object.values(weekDays).map(({ value }) => value)
