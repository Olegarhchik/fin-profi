import React from 'react'
import clsx from 'clsx'

export function Section({ children, shrink, padding, className }) {
  return (
    <section
      className={clsx({shrink}, className)}
      style={{ padding: padding ?? "32px 120px" }}
    >
      { children }
    </section>
  )
}
