import { useState } from 'react'

import { Play } from '@/assets/icons'
import { COLORS } from '@/constants'
import { ExpandButton, ProgressCircle, Skeleton } from '@/ui'

import { Article } from '../constants'

type ArticleCardProps = Article & {
  ref: (node: HTMLDivElement | null) => void,
  isLoading: boolean
}

export function ArticleCard({ id, name, progress, ref, isLoading }: ArticleCardProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false)

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
        onClick={() => alert(`Переход к статье ${id}`)}
      />
    </div>
  )
}
