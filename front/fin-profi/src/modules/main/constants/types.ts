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
    isRead: boolean,
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

export type { ModuleDTO, Module, Article, Point }