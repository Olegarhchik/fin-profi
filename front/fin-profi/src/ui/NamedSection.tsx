import clsx from 'clsx'
import { PropsWithChildren, ReactNode, Ref } from 'react'

export type NamedSectionProps = PropsWithChildren<{
  text: string,
  icon: ReactNode,
  className?: string,
  shrink?: boolean,
  dark?: boolean,
  grayscale?: boolean,
  padding?: string,
  gap?: string,
  ref?: Ref<HTMLDivElement>
}>

export function NamedSection(props: NamedSectionProps) {
  return (
    <section
      className={
        clsx("named", {
          shrink: props.shrink,
          dark: props.dark,
          grayscale: props.grayscale
        }, props.className)
      }
      style={{
        padding: props.padding ?? "24px",
        gap: props.gap ?? "16px"
      }}
    >
      <div className="header">
        <div className="icon">{props.icon}</div>
        <span className="label">{props.text}</span>
      </div>

      <div className="content" ref={props.ref} >
        {props.children}
      </div>
    </section>
  )
}