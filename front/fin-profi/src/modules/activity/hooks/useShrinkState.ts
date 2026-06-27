import { useEffect, useRef, useState } from "react"
import { Activity } from "../types"

export function useShrinkState(activity: Activity[]) {
    const [shouldShrink, setShouldShrink] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!activity || !containerRef.current) return

        const { scrollHeight, clientHeight } = containerRef.current

        setShouldShrink(scrollHeight > clientHeight)
    }, [activity])

    return { shouldShrink, containerRef }
}