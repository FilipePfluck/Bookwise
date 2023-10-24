import Image from 'next/image'
import * as S from './styles'
import { Flex } from '@/styled-system/jsx'
import { Rating } from '../../primitives/Rating'
import { Dialog } from '@ark-ui/react'
import { BookDrawer } from '../../composed/BookDrawer'
import { css } from '@/styled-system/css'

type PopularBookProps = {
  bookName: string
  bookSrc: string
  authorName: string
  rating: number
  size?: 'sm' | 'md'
}

export const PopularBook = ({
  authorName,
  bookName,
  bookSrc,
  rating,
  size,
}: PopularBookProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={css({ all: 'unset' })}>
        <S.BookContainer>
          <Image
            src={bookSrc}
            alt={bookName}
            width={108}
            height={152}
            className={S.imageStyles({ size })}
          />
          <Flex direction="column" gap="8">
            <Flex direction="column" mb="auto">
              <S.BookName>{bookName}</S.BookName>
              <S.BookAuthor>{authorName}</S.BookAuthor>
            </Flex>
            <Rating rate={rating} bookName={bookName} disabled />
          </Flex>
        </S.BookContainer>
      </Dialog.Trigger>
      <BookDrawer
        book={{
          amountOfRatings: 4,
          bookAuthor: authorName,
          bookName,
          bookSrc,
          rating,
        }}
      />
    </Dialog.Root>
  )
}
