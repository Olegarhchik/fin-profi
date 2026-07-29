import { useQuery } from '@tanstack/react-query'

import { FETCH_ARTICLE_KEY } from '../constants'
import { fetchArticle } from '../api'

export function useArticleQuery(id: number) {
    return useQuery({
        queryKey: [...FETCH_ARTICLE_KEY, id],
        queryFn: () => fetchArticle(id)
    })
}