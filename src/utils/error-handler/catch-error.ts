export async function catchError<Data>(
    promise: Promise<Data>
): Promise<[undefined, Data] | [Error]> {
    try {
        const data = await promise
        const result: [undefined, Data] = [undefined, data]
        return result
    } catch (error) {
        if (!(error instanceof Error)) {
            throw new Error("Error is not an instance of Error", {
                cause: error,
            })
        }
        return [error]
    }
}

export async function catchErrorType<
    Data,
    E extends new (message?: string) => Error,
>(
    promise: Promise<Data>,
    errorsToCatch: E[]
): Promise<[undefined, Data] | [InstanceType<E>]> {
    try {
        const data = await promise
        const result: [undefined, Data] = [undefined, data]
        return result
    } catch (error) {
        if (errorsToCatch.some((errorType) => error instanceof errorType)) {
            return [error as InstanceType<E>]
        }

        throw error
    }
}
