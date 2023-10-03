import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'

export const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <S.SearchBarInput className="peer" placeholder="Buscar livro ou autor" />
      <S.IconContainer>
        <MagnifyingGlass size={20} />
      </S.IconContainer>
    </S.SearchBarContainer>
  )
}
