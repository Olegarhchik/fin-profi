import { useEffect, useState } from "react"

import { Activity } from "../types"
import data from "../data"

export function useActivityState() {
    const [activity, setActivity] = useState<Activity[]>([])

    useEffect(() => {
        setActivity(data.map(({ type, name, created_at }) => {
            const date = new Date(created_at)
            date.setHours(0, 0, 0, 0)

            const today = new Date()
            today.setHours(0, 0, 0, 0)

            const daysAgo = Math.round((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

            return { type, name, daysAgo }
        }))

    }, [])

    return activity
}