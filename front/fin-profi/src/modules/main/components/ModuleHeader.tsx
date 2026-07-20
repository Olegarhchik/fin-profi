import { ProgressBar, Skeleton, StatusLabel } from '@/ui'

import { Module } from '../constants'
import { getStatus } from '../helpers'

type Props = {
  isLoading: boolean,
  module?: Module
}

export function ModuleHeader({ isLoading, module }: Props) {
  const progress = module?.articles
    .filter(article => article.progress === 100)
    .length ?? 0
  const all = module?.articles?.length ?? 0

  const { status, text } = getStatus(progress, all)

  return (
    <div className="header">
      <div className="info">
        <div className="head">
          <span className="label">Модуль {module?.id ?? 0}</span>

          <Skeleton width={70} height={26} show={isLoading}>
            <StatusLabel type={status === "completed" ? "active" : status}>{text}</StatusLabel>
          </Skeleton>
        </div>

        <Skeleton width={240} height={31} show={isLoading}><h2>{module!.name}</h2></Skeleton>
      </div>

      {status !== "inactive" && <div className="module-progress">
        <Skeleton width={96} height={18} show={isLoading}>
          <span className="small">{progress} из {all} прочитано</span>
        </Skeleton>

        <Skeleton width={128} height={8} show={isLoading}>
          <ProgressBar value={progress / all * 100} height={8} />
        </Skeleton>
      </div>}
    </div>
  )
}
