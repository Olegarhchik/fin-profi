import { AUTH, QUIZ_STATUS, STATUS } from "./names"

type Auth = typeof AUTH[keyof typeof AUTH]
type Status = typeof STATUS[keyof typeof STATUS]
type QuizStatus = typeof QUIZ_STATUS[keyof typeof QUIZ_STATUS]

type Toast = {
    id: number,
    message: string,
    action: () => void
}

type ConfirmToast = {
    message: string | null,
    isOpen: boolean,
    resolver: ((value: boolean) => void) | null
}

type Payload = {
    sub: string,
    id_user: string
}

type UserDTO = {
    id_user: number,
    name: string,
    email: string,
    points: number,
    id_current_article: number | null
}

type User = { id: number } & Pick<UserDTO, 'name' | 'email' | 'points'>

type UserParams = {
    name?: string,
    email?: string,
    points?: number
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
    content: {
        data: []
    },
    id_quiz: number | null,
    users_articles: UsersArticles[]
}

type Progress = {
    progress: number,
    articleId: number,
    isRead: boolean
}

export type {
    Auth,
    Status,
    Toast,
    ConfirmToast,
    Payload,
    UserDTO,
    User,
    UserParams,
    ArticleDTO,
    Progress,
    QuizStatus
}