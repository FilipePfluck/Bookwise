import Image from 'next/image'
import * as S from './styles'
import { Flex } from '../../../styled-system/jsx'
import { Avatar } from '../Avatar'
import { css } from '../../../styled-system/css'
import { Rating } from '../Rating'
import { ReadMore } from '../ReadMore'

type BookRatingCardProps = {
  userName: string
  userAvatar: string
  publishedOn: string
  bookSrc: string
  bookName: string
  bookAuthor: string
  bookReview: string
}

export const BookRatingCard = ({
  publishedOn,
  userAvatar,
  userName,
  bookName,
  bookAuthor,
  bookSrc,
  bookReview,
}: BookRatingCardProps) => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.RatingAuthor>
          <Avatar src={userAvatar} name={userName} />
          <Flex direction="column">
            <S.UserName>{userName}</S.UserName>
            <S.PublishedOn>{publishedOn}</S.PublishedOn>
          </Flex>
        </S.RatingAuthor>
        <Rating disabled bookName={bookName} rate={4} />
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
