import { useParams } from 'react-router-dom'

export function useParamsId(name: string) {
    const id = useParams()[name]

    return parseInt(id!)
}