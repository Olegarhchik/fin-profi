import clsx from 'clsx'

import type { Block } from '../constants'
import { WarningBlock } from './WarningBlock'
import { HeaderBlock } from './HeaderBlock'
import { MultilineSkeleton, Skeleton } from '@/ui'

type Props = {
  isLoading: boolean
} & Block

export function Block({ type, text, isLoading }: Props) {
  return (
    <div className={clsx("block", type)}>
      {type === "header" &&
        <Skeleton
          height={30}
          width={250}
          show={isLoading}
        >
          <HeaderBlock text={text} />
        </Skeleton>
      }
      {type === "paragraph" &&
        <MultilineSkeleton
          gap={11.5}
          height={17}
          lineCount={5 + Math.ceil(Math.random() * 4)}
          show={isLoading}
        >
          <span className="body">{text}</span>
        </MultilineSkeleton>
      }
      {type === "warning" && <WarningBlock>{text}</WarningBlock>}
    </div>
  )
}