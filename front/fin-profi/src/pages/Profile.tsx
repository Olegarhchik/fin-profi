import { ContinueSection } from '@/components'
import { Content, SideBar } from '@/ui'

import { useParamsId } from '@/hooks'
import { ProfileInfoSection } from '@/modules/profile-actions'
import { StatisticsSection } from '@/modules/statistics'
import { ActivitySection } from '@/modules/activity'
import { NextRankSection, RatingSection } from '@/modules/rating'

export default function Profile() {
  const id = useParamsId("userId")

  // проверка корректности url

  return (
    <>
      <Content>
        <ProfileInfoSection />

        <StatisticsSection />

        <ActivitySection />
      </Content>

      <SideBar>
        <RatingSection />

        <NextRankSection />

        <ContinueSection
          name="Название статьи"
          id={2}
          articleId={0}
          module="Название модуля"
          progress={80}
        />
      </SideBar>
    </>
  )
}