import { Rating } from '../constants'

export function getTemplate(id: number): Rating {
    return {
        count: 0,
        list: new Array(8).fill({
            id,
            name: "—",
            points: 0
        })
    }
}