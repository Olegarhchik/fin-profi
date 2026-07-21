import { useState } from 'react'

import { Play } from '@/assets/icons'
import { COLORS, POINTS_PER_ARTICLE } from '@/constants'
import { ExpandButton, ProgressCircle, Skeleton } from '@/ui'

import { Article } from '../constants'
import { trigger } from '@/modules/local-progress'
import { useProgressStore } from '@/store'

type ArticleCardProps = Article & {
  ref: (node: HTMLDivElement | null) => void,
  isLoading: boolean
}

export function ArticleCard({ id, name, progress, ref, isLoading }: ArticleCardProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const setArticleProgress = useProgressStore(state => state.setArticleProgress)
  const setPoints = useProgressStore(state => state.setPoints)
  const [wasClicked, setWasClicked] = useState<boolean>(false)

  return (
    <div
      className="article-card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        alignSelf: id % 2 === 0 ? "flex-end" : "flex-start",
        pointerEvents: isLoading ? "none" : "initial"
      }}
      ref={ref}
    >
      <ProgressCircle
        value={progress}
        text={id}
        style={{ color: progress === 0 ? COLORS.DARK_GRAY : COLORS.TEXT }}
      />

      <Skeleton width={66} height={20} show={isLoading}>
        <h4>{name}</h4>
      </Skeleton>

      <ExpandButton
        show={!isLoading && isHovering}
        delay={-0.2}
        icon={<Play />}
        onClick={async () => {
          if (wasClicked) {
            const { error } = await trigger()

            console.log(error)
          } else {
            setArticleProgress({
              articleId: 1,
              progress: 100
            })

            setPoints(POINTS_PER_ARTICLE)

            setArticleProgress({
              articleId: 2,
              progress: 66
            })

            setArticleProgress({
              articleId: 4,
              progress: 20
            })

            setArticleProgress({
              articleId: 2,
              progress: 100
            })

            setPoints(POINTS_PER_ARTICLE)

            setWasClicked(true)
          }
        }}
      />
    </div>
  )
}
