import { ArticleDTO } from '@/constants'
import { Article } from '../constants'

export function articleAdapter(article: ArticleDTO): Article {
    return {
        id: article.id_article,
        name: article.name,
        progress: 0,
        moduleId: article.id_module
    }
}