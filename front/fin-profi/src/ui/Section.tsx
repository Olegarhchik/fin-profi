import clsx from 'clsx'
import { CSSProperties, PropsWithChildren } from 'react'

export type SectionProps = PropsWithChildren<{
  className?: string,
  style?: CSSProperties,
  shrink?: boolean,
  padding?: string,
}>

export function Section({ children, shrink, padding, className }: SectionProps) {
  return (
    <section
      className={clsx({shrink}, className)}
      style={{ padding: padding ?? "32px 120px" }}
    >
      { children }
    </section>
  )
}
