import { Invest } from "@/assets/icons"
import { NamedSection } from "@/ui"

import { ActivityCard } from "./ActivityCard"
import { useActivityState, useShrinkState } from "../hooks"
import "../style.scss"

export function ActivitySection() {
  const activity = useActivityState()
  const { shouldShrink, containerRef } = useShrinkState(activity)

  return (
    <NamedSection
      icon={<Invest />}
      text="Недавняя активность"
      padding="32px 40px"
      gap="24px"
      className="activity"
      ref={containerRef}
      shrink={shouldShrink}
    >
      {activity.map((activityObj, index) => (
        <ActivityCard
          key={index}
          {...activityObj}
          delay={0.05 * index}
        />
      ))}
    </NamedSection>
  )
}
