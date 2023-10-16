import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">$ 12,000.00</PriceHighlight>
              </td>

              <td>Venda</td>
              <td>04/13/2023</td>
            </tr>

            <tr>
              <td width="50%">Pizza</td>
              <td>
                <PriceHighlight variant="outcome">- $ 12.00</PriceHighlight>
              </td>
              <td>Alimentacao</td>
              <td>04/14/2023</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
