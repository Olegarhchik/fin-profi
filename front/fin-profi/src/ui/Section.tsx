import clsx from 'clsx'
import { motion } from 'framer-motion'
import { CSSProperties, PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  className?: string,
  style?: CSSProperties,
  padding?: string,
  layout?: boolean,
  grow?: boolean
}>

export function Section({ children, padding, className, style, layout, grow }: SectionProps) {
  return (
    <motion.section
      className={clsx(className, { grow })}
      style={{ ...style, padding: padding ?? "32px 120px" }}
      layout={layout}
    >
      {children}
    </motion.section>
  )
}
