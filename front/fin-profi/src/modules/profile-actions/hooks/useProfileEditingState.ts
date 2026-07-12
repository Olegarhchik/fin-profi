import { useEffect, useState } from 'react'

export function useProfileEditingState() {
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        if (isEditing == false) return

        const handleEnterKey = async (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                setIsEditing(false)
            }
        }

        window.addEventListener('keydown', handleEnterKey)

        return () => window.removeEventListener('keydown', handleEnterKey)
    }, [isEditing])

    return [isEditing, setIsEditing] as const
}