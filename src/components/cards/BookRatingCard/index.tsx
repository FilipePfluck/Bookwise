import Image from 'next/image'
import * as S from './styles'
import { Flex } from '../../../../styled-system/jsx'
import { css } from '../../../../styled-system/css'
import { Rating } from '../../Rating'
import { ReadMore } from '../../ReadMore'
import { User } from '@/components/User'

type BookRatingCardProps = {
  userName: string
  userAvatar: string
  publishedOn: string
  bookSrc: string
  bookName: string
  bookAuthor: string
  bookReview: string
  rating: number
}

export const BookRatingCard = ({
  publishedOn,
  userAvatar,
  userName,
  bookName,
  bookAuthor,
  bookSrc,
  bookReview,
  rating,
}: BookRatingCardProps) => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <User
          publishedOn={publishedOn}
          userAvatar={userAvatar}
          userName={userName}
        />
        <Rating disabled bookName={bookName} rate={rating} />
      </S.CardHeader>

      <S.CardBody>
        <Image
          className={css({ h: '152px', rounded: 'sm' })}
          src={bookSrc}
          alt={bookName}
          height={152}
          width={100}
        />
        <Flex direction="column" gap="5">
          <Flex direction="column">
            <S.BookName>{bookName}</S.BookName>
            <S.BookAuthor>{bookAuthor}</S.BookAuthor>
          </Flex>
          <ReadMore amountOfWords={32} id="book-review" text={bookReview} />
        </Flex>
      </S.CardBody>
    </S.CardContainer>
  )
}
