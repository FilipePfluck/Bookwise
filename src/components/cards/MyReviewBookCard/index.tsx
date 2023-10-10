import { Flex } from '@/styled-system/jsx'
import * as S from './styles'
import Image from 'next/image'
import { css } from '@/styled-system/css'
import { Rating } from '@/components/Rating'

type MyReviewBookCardProps = {
  highlight?: boolean
  publishedOn: string
  bookSrc: string
  bookName: string
  bookAuthor: string
  bookReview: string
  rating: number
}

export const MyReviewBookCard = ({
  highlight,
  bookAuthor,
  bookName,
  bookReview,
  bookSrc,
  publishedOn,
  rating,
}: MyReviewBookCardProps) => {
  return (
    <S.CardContainer highlight={highlight}>
      <Image
        src={bookSrc}
        alt={bookName}
        height={152}
        width={108}
        className={css({ w: '108px', h: '152px', rounded: 'md' })}
      />
      <Flex direction="column" gap="3" w="full">
        <S.CardHeader>
          <S.PostDate>{publishedOn}</S.PostDate>
          <Rating rate={rating} bookName={bookName} disabled />
        </S.CardHeader>
        <Flex direction="column">
          <S.BookName>{bookName}</S.BookName>
          <S.BookAuthor>{bookAuthor}</S.BookAuthor>
        </Flex>
        <S.BookReview>{bookReview}</S.BookReview>
      </Flex>
    </S.CardContainer>
  )
}
