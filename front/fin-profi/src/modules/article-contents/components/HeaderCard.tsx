import clsx from 'clsx'

type HeaderCardProps = {
  active: boolean,
  node?: HTMLDivElement,
  text: string
}

export function HeaderCard({ active, node, text }: HeaderCardProps) {
  return (
    <div
      onClick={() => node?.scrollIntoView({ behavior: "smooth" })}
      className={clsx(
        active ? "card-header" : "small",
        "contents-header"
      )}
    >{text}</div>
  )
}
