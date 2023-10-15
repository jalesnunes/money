import { css, styled } from "styled-components";

export const SummaryContainer = styled.section`
  /* Esse primeiro bloco de e extamente igual ao header container para justamente ele comecar extamente onde comeca o logo*/
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.25rem;

  display: grid;
  /* para criar 3 colunas iguais  */
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  /* para ao inves desse component comecar bem abaixo do header ele ocupar uma parte do header */
  margin-top: -5rem;
`;

// solucao para quando voce tem elementos quase todos iguais mas voce tem um que e diferente
interface SummaryCardProps {
    variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }

  /* por pardrao o tags como strong sao display inline e nao e possivel dar margin vertigal em elementos inline por isso mudamos para block, para podermos coloar um margin vertical no elemento */
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${props => props.variant === 'green' && css`
  background: ${props.theme['green-700']};
  `}
`;
