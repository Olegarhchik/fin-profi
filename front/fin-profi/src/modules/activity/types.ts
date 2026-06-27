type Entity = 'article' | 'quiz'

type ActivityResponse = {
    type: Entity,
    name: string,
    created_at: string
}

type Activity = {
    type: Entity,
    name: string,
    daysAgo: number
}

export type { ActivityResponse, Activity }