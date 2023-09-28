import Image from 'next/image'
import * as S from './styles'
import { css } from '../../../styled-system/css'
import { Flex } from '../../../styled-system/jsx'
import { Rating } from '../Rating'

type PopularBookProps = {
  bookName: string
  bookSrc: string
  authorName: string
  rating: number
}

export const PopularBook = ({
  authorName,
  bookName,
  bookSrc,
  rating,
}: PopularBookProps) => {
  return (
    <S.BookContainer>
      <Image
        src={bookSrc}
        alt={bookName}
        width={64}
        height={94}
        className={css({ w: '16', rounded: 'sm' })}
      />
      <Flex direction="column" gap="8">
        <Flex direction="column">
          <S.BookName>{bookName}</S.BookName>
          <S.BookAuthor>{authorName}</S.BookAuthor>
        </Flex>
        <Rating rate={rating} bookName={bookName} disabled />
      </Flex>
    </S.BookContainer>
  )
}
