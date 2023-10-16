import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'
import { HTMLStyledProps } from '@/styled-system/jsx'

type SearchBarProps = HTMLStyledProps<'input'> & {
  labelProps?: HTMLStyledProps<'label'>
}

export const SearchBar = ({ labelProps, ...props }: SearchBarProps) => {
  return (
    <S.SearchBarContainer {...labelProps}>
      <S.SearchBarInput className="peer" {...props} />
      <S.IconContainer>
        <MagnifyingGlass size={20} />
      </S.IconContainer>
    </S.SearchBarContainer>
  )
}
