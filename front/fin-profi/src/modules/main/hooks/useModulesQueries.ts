import { useQueries } from '@tanstack/react-query'

import { useUserStore, useProgressStore } from '@/store'
import { AUTH } from '@/constants'

import { FETCH_ARTICLES_KEY, FETCH_ARTICLES_PROGRESS_KEY, FETCH_MODULES_KEY } from '../constants'
import { fetchModules, fetchArticles, fetchArticlesProgress } from '../api'
import { getPlaceholder, moduleAdapter } from '../helpers'

export function useModulesQueries() {
    const auth = useUserStore(state => state.auth)
    const articles = useProgressStore(state => state.articles)

    return useQueries({
        queries: [
            {
                queryKey: FETCH_MODULES_KEY,
                queryFn: fetchModules
            },
            {
                queryKey: FETCH_ARTICLES_KEY,
                queryFn: fetchArticles
            },
            {
                queryKey: [...FETCH_ARTICLES_PROGRESS_KEY, auth],
                queryFn: fetchArticlesProgress,
                enabled: auth === AUTH.AUTHORIZED
            }
        ],
        combine: (results) => {
            const [modulesRes, articlesRes, progressRes] = results
            const isError = results.some(res => res.isError)

            if (!modulesRes.data || !articlesRes.data || (auth === AUTH.AUTHORIZED && !progressRes.data)) {
                return {
                    data: getPlaceholder(),
                    isLoading: results.some(res => res.isLoading),
                    isError,
                    error: isError ? new Error("Не удалось загрузить модули") : null
                }
            }

            const progressData = auth === AUTH.AUTHORIZED ? progressRes.data : articles
            const progressMap = new Map(
                progressData?.map(p => [p.articleId, p.progress])
            )

            const data = modulesRes.data.map(module => {
                let articlesData = articlesRes.data
                    .filter(article => module.id === article.moduleId)
                    .map(article => ({
                        ...article,
                        progress: progressMap.get(article.id) ?? 0
                    }))

                return moduleAdapter(module, articlesData)
            })

            return {
                data,
                isLoading: results.some(res => res.isLoading),
                isError,
                error: isError ? new Error("Не удалось загрузить модули") : null
            }
        }
    })
}