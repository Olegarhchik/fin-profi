import { useQuery } from '@tanstack/react-query'
import { FETCH_ARTICLES_PROGRESS_KEY } from '../constants/names'
import { fetchArticlesProgress } from '../api'

export function useArticlesProgressQuery(enabled: boolean) {
    return useQuery({
        queryKey: FETCH_ARTICLES_PROGRESS_KEY,
        queryFn: () => fetchArticlesProgress(),
        retry: false,
        enabled
    })
}