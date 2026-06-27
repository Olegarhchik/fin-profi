import { Divider, NamedSection, ProgressCircle } from '@/ui'

import { TemplateDetails } from '../types'

type Props = {
  progress: number,
  value: number,
  sectionProps: Object, // ИСПРАВИТЬ
  template?: TemplateDetails[],
  dark?: boolean
}

export function StatisticsCard({ progress, value, sectionProps, template, dark }: Props) {
  return (
    <NamedSection
      padding="24px"
      gap="12px"
      grayscale={!dark}
      dark={dark}
      {...sectionProps}
    >
      <div className="progress">
        <ProgressCircle
          text={value}
          value={progress}
          style={{
            marginBottom: "10px"
          }}
          large={dark}
        />
      </div>

      <Divider />

      {template?.map((templateObj, index) => (
        <div key={index} className="row">
          <span className={dark ? "h3" : "body"}>{templateObj.text}</span>
          <span className={dark ? "h3" : "body"}>{templateObj.value}</span>
        </div>
      ))}
    </NamedSection>
  )
}