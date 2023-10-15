import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        {/* Em  elementos de container melhor nao deixar textos soltos sempre colocar dentro de outro elemento de texto para facilitar a estilizacao */}
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>$ 17,400.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Withdrawal</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>$ 17,400.00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>$ 17,400.00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
