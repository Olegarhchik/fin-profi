import { Divider, NamedSection, ProgressCircle, type NamedSectionProps } from '@/ui'

import { TemplateDetails } from '../types'

type Props = {
  progress: number,
  value: number,
  template?: TemplateDetails,
  sectionProps: NamedSectionProps
}

export function StatisticsCard({ progress, value, template, sectionProps }: Props) {
  return (
    <NamedSection
      padding="24px"
      gap="12px"
      {...sectionProps}
    >
      <div className="progress">
        <ProgressCircle
          text={value}
          value={progress}
          style={{
            marginBottom: "10px"
          }}
          large={sectionProps.dark}
        />
      </div>

      <Divider />

      {template?.map((templateObj, index) => (
        <div key={index} className="row">
          <span className={sectionProps.dark ? "h3" : "body"}>{templateObj.text}</span>
          <span className={sectionProps.dark ? "h3" : "body"}>{templateObj.value}</span>
        </div>
      ))}
    </NamedSection>
  )
}