type Entities = 'articles' | 'quizzes'

type TemplateDetails = {
    text: string,
    value: number
}[]

type Template = Record<Entities | 'total', TemplateDetails>

type StatisticsDetails = {
    progress: number,
    count: number
}

type Statistics = Record<Entities, StatisticsDetails>

export type { TemplateDetails, Template, Statistics }