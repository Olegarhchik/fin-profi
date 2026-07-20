import { motion } from 'framer-motion'

import { buildPathData, getGradientVariants } from '../helpers'
import { Point } from '../constants'

type Props = {
  from: Point,
  to: Point,
  progress: number
}

export function Curve({ from, to, progress }: Props) {
  const d = buildPathData(from, to, 0.1)

  return (
    <g key={to.articleId}>
      <defs>
        <linearGradient id={`progress-gradient-${to.articleId}`}>
          <motion.stop
            custom={to.articleId}
            variants={getGradientVariants(progress, 1)}
            initial={"initial"}
            animate={"animate"}
          />
          <motion.stop
            custom={to.articleId}
            variants={getGradientVariants(progress, 2)}
            initial={"initial"}
            animate={"animate"}
          />
        </linearGradient>
      </defs>

      <path
        d={d}
        stroke={`url(#progress-gradient-${to.articleId})`}
        strokeWidth={10}
        strokeDasharray={20}
        fill="none"
      />
    </g>
  )
}
