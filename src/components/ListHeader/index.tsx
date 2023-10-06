import { ReactNode } from 'react'
import * as S from './styles'

type ListHeaderProps = {
  name: string
  actionLabel: ReactNode
  actionHref: string
}

export const ListHeader = ({
  actionHref,
  actionLabel,
  name,
}: ListHeaderProps) => {
  return (
    <S.ListHeader>
      <S.ListName>{name}</S.ListName>
      <S.Action href={actionHref}>{actionLabel}</S.Action>
    </S.ListHeader>
  )
}
