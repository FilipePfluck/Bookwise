import { Flex } from '@/styled-system/jsx'
import * as S from './styles'
import Image from 'next/image'
import { css } from '@/styled-system/css'
import { Rating } from '../Rating'
import { BookOpen, BookmarkSimple } from 'phosphor-react'

export type BookDrawerCardProps = {
  bookName: string
  bookSrc: string
  bookAuthor: string
  rating: number
  amountOfRatings: number
}

export const BookDrawerCard = ({
  amountOfRatings,
  bookAuthor,
  bookName,
  bookSrc,
  rating,
}: BookDrawerCardProps) => {
  return (
    <S.CardContainer>
      <Flex gap="8">
        <Image
          src={bookSrc}
          className={css({ w: '171px', h: '242px' })}
          width={171}
          height={242}
          alt={bookName}
        />
        <S.BookInfo>
          <Flex direction="column" gap="2">
            <S.BookTitle>{bookName}</S.BookTitle>
            <S.BookAuthor>{bookAuthor}</S.BookAuthor>
          </Flex>
          <Flex direction="column" gap="1" mr="auto">
            <Rating disabled rate={rating} bookName={bookName} />
            <S.AmountOfRatings>{amountOfRatings} avaliações</S.AmountOfRatings>
          </Flex>
        </S.BookInfo>
      </Flex>
      <S.BookBottomInfo>
        <S.BottomInfoItem>
          <BookmarkSimple size={24} />
          <Flex direction="column">
            <S.BottomInfoLabel>Categoria</S.BottomInfoLabel>
            <S.BottomInfoValue>Computação, Educação</S.BottomInfoValue>
          </Flex>
        </S.BottomInfoItem>
        <S.BottomInfoItem>
          <BookOpen size={24} />
          <Flex direction="column">
            <S.BottomInfoLabel>Páginas</S.BottomInfoLabel>
            <S.BottomInfoValue>160</S.BottomInfoValue>
          </Flex>
        </S.BottomInfoItem>
      </S.BookBottomInfo>
    </S.CardContainer>
  )
}
