import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Globalstyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { Summary } from './components/Summary'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Globalstyle />
      <Transactions />
      <Summary />
    </ThemeProvider>
  )
}
