import styled from 'styled-components'

import { P } from '../../components/Paragraph/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ThemeButton = styled.button`
  font-size: 13px;
  font-weight: bold;
  border-radius: 8px;
  padding: 8x;
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 4;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
