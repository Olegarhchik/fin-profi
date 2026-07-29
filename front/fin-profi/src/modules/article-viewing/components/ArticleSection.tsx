import { Section } from '@/ui'
import { useParamsId } from '@/hooks'

import { ArticleHeader } from './ArticleHeader'
import { Block } from './Block'
import { useArticleQuery } from '../hooks'
import { placeholder } from '../constants'
import "../style.scss"

export function ArticleSection() {
  const id = useParamsId("articleId")
  const { data: responseData, isLoading, isError } = useArticleQuery(id)

  const data = responseData?.content ?? placeholder

  return (
    <Section
      className="article"
      padding="0 120px 28px 120px"
      grow
    >
      <ArticleHeader />

      <div className="article-content">
        {data.map((article, index) => (
          <Block
            isLoading={isError || isLoading}
            key={index}
            {...article}
          />
        ))}
      </div>
    </Section>
  )
}