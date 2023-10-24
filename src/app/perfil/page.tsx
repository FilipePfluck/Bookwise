'use client'

import { Sidebar } from '@/components/composed/Sidebar'
import * as S from './styles'
import { MyReviewBookCard } from '@/components/cards/MyReviewBookCard'
import { Profile } from '@/components/composed/Profile'
import { Flex } from '@/styled-system/jsx'
import { User } from 'phosphor-react'
import { SearchBar } from '@/components/primitives/SearchBar'

export default function Perfil() {
  return (
    <>
      <Sidebar />
      <S.PageContent>
        <S.Title>
          <User size={32} color="var(--colors-green-100)" />
          Perfil
        </S.Title>
        <Flex gap="16">
          <Flex direction="column" gap="6">
            <SearchBar
              labelProps={{ w: 'full' }}
              placeholder="Buscar livro avaliado"
            />

            <MyReviewBookCard
              bookName="A revolução dos bichos"
              bookAuthor="George Orwell"
              publishedOn="Hoje"
              bookReview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit culpa aut dolore doloremque provident libero quibusdam dolor et, nam iste consequuntur voluptatibus, harum earum illum asperiores assumenda, facilis quia ab."
              bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
              rating={3}
            />
            <MyReviewBookCard
              bookName="A revolução dos bichos"
              bookAuthor="George Orwell"
              publishedOn="Hoje"
              bookReview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit culpa aut dolore doloremque provident libero quibusdam dolor et, nam iste consequuntur voluptatibus, harum earum illum asperiores assumenda, facilis quia ab."
              bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
              rating={3}
            />
          </Flex>

          <Profile />
        </Flex>
      </S.PageContent>
    </>
  )
}
