import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Descricao, ThemeButton, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>João Victor</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        Herbaszl
      </Paragraph>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack Java
      </Descricao>
      <ThemeButton onClick={props.trocaTema}>Mude o Tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
