import { ArticleSection } from '@/modules/article-viewing'
import { Content, SideBar } from '@/ui'

export default function Article() {
  return (
    <>
      <Content className="article-content" >
        <ArticleSection />
      </Content>
      <SideBar>

      </SideBar>
    </>
  )
}
