import { clsx } from 'clsx'
import { motion, MotionProps } from 'framer-motion'

import { Article, CheckCircle, Energy } from '@/assets/icons'
import { COLORS, POINTS_PER_ARTICLE, POINTS_PER_QUIZ } from '@/constants'
import { Activity } from '../types'

type Props = Activity & {
  delay: number
}

export function ActivityCard({ type, name, daysAgo, delay }: Props) {
  const animation: MotionProps = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { delay: 0.33 + (delay ?? 0) }
  }

  return (
    <motion.div
      className={clsx("activity-card", type)}
      {...animation}
    >
      {type === "quiz" ?
        <CheckCircle width={14} height={14} />
        :
        <Article width={16} height={16} />
      }

      <h4 style={{ flex: 1 }} >
        {type === "quiz" ? "Пройдена викторина" : "Прочитана статья"} «{name}»
      </h4>

      <div className="points">
        <Energy width={12} height={12} />

        <span
          className="body"
          style={{ color: COLORS.TEXT }}
        >
          +{type === "quiz" ? POINTS_PER_QUIZ : POINTS_PER_ARTICLE} очков
        </span>
      </div>

      <span
        className="body"
        style={{ color: COLORS.MID_GRAY }}
      >
        {daysAgo} дн. назад
      </span>
    </motion.div>
  )
}