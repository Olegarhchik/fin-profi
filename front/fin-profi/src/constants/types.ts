import { AUTH } from "./names"

type Auth = typeof AUTH[keyof typeof AUTH]

type Toast = {
    id: number,
    message: string,
    action: () => void
}

type Payload = {
    sub: string,
    id_user: string
}

type UserDTO = {
    id: number,
    name: string,
    email: string,
    points: number,
    id_current_article: number | null
}

type UsersArticles = {
    id_user: number,
    id_article: number,
    is_read: boolean,
    last_checkpoint: number,
    created_at: string
}

type ArticleDTO = {
    id_article: number,
    id_module: number,
    name: string,
    content: {},
    id_quiz: number | null,
    users_articles: UsersArticles[]
}

type Progress = {
    progress: number,
    articleId: number
}

export type {
    Auth,
    Toast,
    Payload,
    UserDTO,
    ArticleDTO,
    Progress
}