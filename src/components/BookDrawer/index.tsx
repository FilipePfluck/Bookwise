import { Portal } from '@ark-ui/react'
import * as S from './styles'
import { BookDrawerCard, BookDrawerCardProps } from '../cards/BookDrawerCard'
import { BookDrawerRatingCard } from '../cards/BookDrawerRatingCard'
import { Flex } from '@/styled-system/jsx'
import { ListHeader } from '../ListHeader'

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
          <Flex direction="column" gap="4">
            <ListHeader name="Avaliações" actionLabel="Avaliar" actionHref="" />
            <BookDrawerRatingCard
              userAvatar="https://avatars.githubusercontent.com/u/62773200?v=4"
              userName="Filipe Pfluck"
              publishedOn="Hoje"
              bookName="A revolução dos bichos"
              rate={3}
              reviewText="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
            />
            <BookDrawerRatingCard
              userAvatar="https://avatars.githubusercontent.com/u/62773200?v=4"
              userName="Filipe Pfluck"
              publishedOn="Hoje"
              bookName="A revolução dos bichos"
              rate={3}
              reviewText="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
            />
            <BookDrawerRatingCard
              userAvatar="https://avatars.githubusercontent.com/u/62773200?v=4"
              userName="Filipe Pfluck"
              publishedOn="Hoje"
              bookName="A revolução dos bichos"
              rate={3}
              reviewText="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
            />
          </Flex>
        </S.DrawerContent>
      </S.DrawerContainer>
    </Portal>
  )
}
