type UsersModulesDTO = {
    id_module: number,
    id_user: number
}

type ModuleDTO = {
    id_module: number,
    name: string,
    id_quiz: number | null,
    users_modules: UsersModulesDTO[]
}

type Article = {
    id: number,
    name: string,
    progress: number,
    moduleId: number
}

type Module = {
    id: number,
    name: string,
    articles: Article[]
}

type Point = {
    x: number,
    y: number,
    articleId: number
}

type ProgressDTO = {
    id_user: number,
    id_article: number,
    is_read: boolean,
    last_checkpoint: number,
    created_at: string
}

export type { ModuleDTO, Module, Article, Point, ProgressDTO }