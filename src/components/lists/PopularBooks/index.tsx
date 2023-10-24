'use client'

import { CaretRight } from 'phosphor-react'
import { Flex } from '@/styled-system/jsx'

import * as S from './styles'
import { PopularBook } from '../../cards/PopularBookCard'
import { ListHeader } from '../ListHeader'

export const PopularBooks = () => {
  return (
    <Flex direction="column" gap="4">
      <ListHeader
        name="Livros populares"
        actionHref="/explorar"
        actionLabel={
          <Flex align="center" gap="2">
            Ver todos
            <CaretRight size={16} />
          </Flex>
        }
      />
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
