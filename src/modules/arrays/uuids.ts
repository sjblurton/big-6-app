import { v4 as uuidv4 } from "uuid"

export function createUUIDs(count: number) {
    return Array.from({ length: count }, () => uuidv4())
}
