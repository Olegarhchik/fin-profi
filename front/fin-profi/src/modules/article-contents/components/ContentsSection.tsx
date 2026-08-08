import { RefObject } from 'react'

import { NamedSection } from '@/ui'

import { HeaderCard } from './HeaderCard'
import "../style.scss"

type ContentsSectionProps = {
  headers: {
    order: number,
    id: string,
    text: string
  }[],
  refMap: RefObject<Map<number, HTMLDivElement>>,
  activeHeader: number
}

export function ContentsSection({ headers, refMap, activeHeader }: ContentsSectionProps) {
  return (
    <NamedSection
      text="Содержание"
      className="contents"
      padding="16px 24px"
      grow
    >
      {headers.map(header => {
        const node = refMap.current.get(header.order)

        return (
          <HeaderCard
            key={header.id}
            active={activeHeader === header.order}
            node={node}
            text={header.text}
          />
        )
      })}
    </NamedSection>
  )
}