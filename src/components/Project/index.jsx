import styled from 'styled-components'
import Title from '../Title'
import Paragraph from '../Paragraph'
import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragraph tipo="secundario">Lista de tarefas feita com VueJs</Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
