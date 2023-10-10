import { Flex } from '@/styled-system/jsx'
import { Avatar } from '../Avatar'
import * as S from './styles'

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
      <S.BottomSection></S.BottomSection>
    </S.ProfileContainer>
  )
}
