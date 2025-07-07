import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { GitHubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre Mim</Title>
      <Paragraph tipo="principal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit
        quidem id odio recusandae, dolore minus similique iure repellendus modi
        consectetur vel nostrum quod assumenda amet natus perferendis officiis
        perspiciatis?
      </Paragraph>
      <GitHubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=Herbaszl&theme=synthwave&show_icons=true&hide_border=true&count_private=true" />
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=Herbaszl&theme=synthwave&hide_border=true" />
      </GitHubSecao>
    </section>
  )
}

export default Sobre
