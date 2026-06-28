import { useContext, useEffect, useRef } from "react"

import { RatingContext } from "./components/RatingProvider"

export default function useScrollRef() {
    const { rating } = useContext(RatingContext)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!rating) return

        setTimeout(() => {
            const container = scrollRef.current

            container?.scrollTo({
                top: container.scrollHeight,
                behavior: "smooth"
            })
        }, 333)
    }, [rating])

    return scrollRef
}