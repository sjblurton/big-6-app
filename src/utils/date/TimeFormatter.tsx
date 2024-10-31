class TimeFormatter {
    private static readonly HUNDREDTHS_PER_SECOND = 100
    private static readonly HUNDREDTHS_PER_MINUTE =
        60 * TimeFormatter.HUNDREDTHS_PER_SECOND

    static getSeconds(time: number): string {
        const hundredthsInCurrentMinute =
            time % TimeFormatter.HUNDREDTHS_PER_MINUTE
        const seconds = Math.floor(
            hundredthsInCurrentMinute / TimeFormatter.HUNDREDTHS_PER_SECOND
        )
        return seconds.toString().padStart(2, "0")
    }

    static getMinutes(time: number): string {
        const minutes = Math.floor(time / TimeFormatter.HUNDREDTHS_PER_MINUTE)
        return minutes.toString().padStart(2, "0")
    }

    static getMilliseconds(time: number): string {
        const milliseconds = time % TimeFormatter.HUNDREDTHS_PER_SECOND
        return milliseconds.toString().padStart(2, "0")
    }
}

export default TimeFormatter
