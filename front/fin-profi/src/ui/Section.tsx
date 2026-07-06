import clsx from 'clsx'
import { motion } from 'framer-motion'
import { CSSProperties, PropsWithChildren } from 'react'

export type SectionProps = PropsWithChildren<{
  className?: string,
  style?: CSSProperties,
  shrink?: boolean,
  padding?: string,
  layout?: boolean
}>

export function Section({ children, shrink, padding, className, layout }: SectionProps) {
  return (
    <motion.section
      className={clsx({ shrink }, className)}
      style={{ padding: padding ?? "32px 120px" }}
      layout={layout}
    >
      {children}
    </motion.section>
  )
}
