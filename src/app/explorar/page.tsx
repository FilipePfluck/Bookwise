'use client'
import { Sidebar } from '@/components/Sidebar'

import * as S from './styles'
import { Flex } from '@/styled-system/jsx'
import { Binoculars } from 'phosphor-react'

export default function Explore() {
  return (
    <>
      <Sidebar />
      <S.PageContent>
        <Flex direction="column" gap="10">
          <S.Title>
            <Binoculars size={32} color="var(--colors-green-100)" /> Explorar
          </S.Title>
        </Flex>
      </S.PageContent>
    </>
  )
}
