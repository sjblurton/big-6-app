"use client"

import ErrorMessage from "@/modules/components/ui/ErrorMessage/ErrorMessage"

export default function Error({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return <ErrorMessage message="Oops, something went wrong!" reset={reset} />
}
