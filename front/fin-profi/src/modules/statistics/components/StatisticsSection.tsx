import { useState } from 'react'

import { Article, CheckCircle, Energy } from '@/assets/icons'
import { Section } from '@/ui'

import { StatisticsCard } from './StatisticsCard'
import { buildTemplate } from '../buildTemplate'
import { Statistics } from '../types'
import data from '../data'
import '../style.css'

export function StatisticsSection() {
  const [statistics, setStatistics] = useState<Statistics>(data)

  const { articles, quizzes } = statistics
  const template = buildTemplate(statistics)

  return (
    <Section
      padding="0"
      className="statistics"
      shrink
    >
      <StatisticsCard
        sectionProps={{
          text: "Общий прогресс",
          icon: <Energy height={10} width={10} />
        }}
        progress={(articles.progress + quizzes.progress) / (articles.count + quizzes.count) * 100}
        value={articles.progress + quizzes.progress}
        template={template.total}
        dark
      />

      <StatisticsCard
        sectionProps={{
          text: "Статьи",
          icon: <Article height={10} width={10} />
        }}
        progress={articles.progress / articles.count * 100}
        value={articles.progress}
        template={template.articles}
      />

      <StatisticsCard
        sectionProps={{
          text: "Викторины",
          icon: <CheckCircle height={10} width={10} />
        }}
        progress={quizzes.progress / quizzes.count * 100}
        value={quizzes.progress}
        template={template.quizzes}
      />
    </Section>
  )
}
