'use client'

import { CaretRight } from 'phosphor-react'
import { Flex } from '../../../styled-system/jsx'

import * as S from './styles'
import { PopularBook } from '../PopularBookCard'

export const PopularBooks = () => {
  return (
    <Flex direction="column" gap="4">
      <S.ListHeading>
        <S.ListName>Livros populares</S.ListName>
        <S.SeeAll href="/explorar">
          Ver todos
          <CaretRight />
        </S.SeeAll>
      </S.ListHeading>
      <S.BookList>
        <PopularBook
          bookName="A revolução dos bichos"
          authorName="George Orwell"
          bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
          rating={3}
        />
      </S.BookList>
    </Flex>
  )
}
