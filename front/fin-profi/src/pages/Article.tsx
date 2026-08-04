import { AnimatePresence } from 'framer-motion'

import { useParamsId, useUserQuery } from '@/hooks'
import { ArticleFooterSection, ArticleSection, useArticleQuery } from '@/modules/article-viewing'
import { QuizSection } from '@/modules/quiz-taking'
import { Content, SideBar } from '@/ui'

export default function Article() {
  const id = useParamsId("articleId")

  const { data: article } = useArticleQuery(id)
  const { data: user } = useUserQuery()

  return (
    <>
      <Content className="article-content" >
        <ArticleSection />

        <AnimatePresence>
          {article?.quizId && <QuizSection id={article.quizId} />}
        </AnimatePresence>

        <ArticleFooterSection />
      </Content>

      <SideBar>

      </SideBar>
    </>
  )
}
