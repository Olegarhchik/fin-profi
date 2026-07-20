import { Article } from '../constants'

export function setProgress(article: Article, progress: number) {
    article.progress = progress

    return article
}