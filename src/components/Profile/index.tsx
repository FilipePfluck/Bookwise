import { Flex } from '@/styled-system/jsx'
import { Avatar } from '../Avatar'
import * as S from './styles'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'

export const Profile = () => {
  return (
    <S.ProfileContainer>
      <S.TopSection>
        <Avatar
          name="Filipe Pfluck"
          src="https://avatars.githubusercontent.com/u/62773200?v=4"
          size="lg"
        />
        <Flex direction="column" alignItems="center">
          <S.UserName>Filipe Pfluck</S.UserName>
          <S.MemberSince>Membro desde 2021</S.MemberSince>
        </Flex>
      </S.TopSection>
      <S.Separator />
      <S.BottomSection>
        <S.ProfileEntry>
          <BookOpen color="var(--colors-green-100)" size={32} />
          <Flex direction="column">
            <S.ProfileEntryValue>3853</S.ProfileEntryValue>
            <S.ProfileEntryLabel>Páginas lidas</S.ProfileEntryLabel>
          </Flex>
        </S.ProfileEntry>

        <S.ProfileEntry>
          <Books color="var(--colors-green-100)" size={32} />
          <Flex direction="column">
            <S.ProfileEntryValue>10</S.ProfileEntryValue>
            <S.ProfileEntryLabel>Livros avaliados</S.ProfileEntryLabel>
          </Flex>
        </S.ProfileEntry>

        <S.ProfileEntry>
          <UserList color="var(--colors-green-100)" size={32} />
          <Flex direction="column">
            <S.ProfileEntryValue>8</S.ProfileEntryValue>
            <S.ProfileEntryLabel>Autores lidos</S.ProfileEntryLabel>
          </Flex>
        </S.ProfileEntry>

        <S.ProfileEntry>
          <BookmarkSimple color="var(--colors-green-100)" size={32} />
          <Flex direction="column">
            <S.ProfileEntryValue>Computação</S.ProfileEntryValue>
            <S.ProfileEntryLabel>Categoria mais lida</S.ProfileEntryLabel>
          </Flex>
        </S.ProfileEntry>
      </S.BottomSection>
    </S.ProfileContainer>
  )
}
