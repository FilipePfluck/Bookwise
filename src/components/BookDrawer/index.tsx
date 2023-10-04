import { Portal } from '@ark-ui/react'
import * as S from './styles'
import { BookDrawerCard, BookDrawerCardProps } from '../BookDrawerCard'

type BookDrawerProps = {
  book: BookDrawerCardProps
}

export const BookDrawer = ({ book }: BookDrawerProps) => {
  return (
    <Portal>
      <S.Overlay />
      <S.DrawerContainer>
        <S.DrawerContent>
          <BookDrawerCard {...book} />
        </S.DrawerContent>
      </S.DrawerContainer>
    </Portal>
  )
}
