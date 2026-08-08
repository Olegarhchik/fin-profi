import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

import { RefMapValue } from '@/modules/article-contents'

export function useDelayedScroll(isSuccess: boolean, header?: RefMapValue) {
    const { hash } = useLocation()
    const hasScrolled = useRef(false)

    useEffect(() => {
        if (!isSuccess || !header || hasScrolled.current) return

        const timer = setTimeout(() => {
            const node = hash === "" ? header.node : document.querySelector(hash)

            node?.scrollIntoView({ behavior: "smooth" })

            hasScrolled.current = true
        }, 300)

        return () => clearTimeout(timer)
    }, [isSuccess, header])
}