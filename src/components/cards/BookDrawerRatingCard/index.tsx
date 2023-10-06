import { User } from '@/components/User'
import * as S from './styles'
import { Rating } from '@/components/Rating'

type BookDrawerRatingCardProps = {
  publishedOn: string
  userAvatar: string
  userName: string
  rate: number
  bookName: string
  reviewText: string
}

export const BookDrawerRatingCard = ({
  publishedOn,
  userAvatar,
  userName,
  bookName,
  rate,
  reviewText,
}: BookDrawerRatingCardProps) => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <User
          publishedOn={publishedOn}
          userAvatar={userAvatar}
          userName={userName}
        />
        <Rating disabled rate={rate} bookName={bookName} />
      </S.CardHeader>
      <S.ReviewText>{reviewText}</S.ReviewText>
    </S.CardContainer>
  )
}
