import { Flex } from '@/styled-system/jsx'
import { Avatar } from '../Avatar'
import * as S from './styles'

type UserProps = {
  userName: string
  userAvatar: string
  publishedOn: string
}

export const User = ({ publishedOn, userAvatar, userName }: UserProps) => {
  return (
    <S.RatingAuthor>
      <Avatar src={userAvatar} name={userName} />
      <Flex direction="column">
        <S.UserName>{userName}</S.UserName>
        <S.PublishedOn>{publishedOn}</S.PublishedOn>
      </Flex>
    </S.RatingAuthor>
  )
}
