import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

type NodeWithHeaderProps = PropsWithChildren<{
  text: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>

export function NodeWithHeader({ text, children, ...props }: NodeWithHeaderProps) {
  return (
    <div {...props}>
      <h2>{text}</h2>
      {children}
    </div>
  )
}
