import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import themeLight from './themes/light'
import themeDark from './themes/dark'

function App() {
  const [isTemaDark, setIsTemaDark] = useState(false)

  function trocaTema() {
    setIsTemaDark(!isTemaDark)
  }

  return (
    <ThemeProvider theme={isTemaDark ? themeDark : themeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
