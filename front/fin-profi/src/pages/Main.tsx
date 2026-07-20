import { ModuleSection, useModulesQueries } from '@/modules/main'
import { Content, Section, SideBar } from '@/ui'

export default function Main() {
  const { data: modules, isLoading, isError } = useModulesQueries()

  return (
    <>
      <Content>
        {modules.map(module => (
          <ModuleSection
            key={module.id}
            module={module}
            isLoading={isError || isLoading}
          />
        ))}
      </Content>

      <SideBar>
        <Section grow></Section>
      </SideBar>
    </>
  )
}
