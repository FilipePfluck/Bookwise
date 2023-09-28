'use client'

import { RatingGroup, RatingGroupProps } from '@ark-ui/react'
import * as S from './styles'
import { Star } from 'phosphor-react'

type RatingProps = RatingGroupProps & {
  bookName: string
  rate: number
}

export const Rating = ({ bookName, rate, ...props }: RatingProps) => {
  return (
    <RatingGroup
      max={5}
      defaultValue={3}
      value={rate}
      aria-label={`${bookName} rating`}
      {...props}
    >
      <S.BookRating>
        {({ sizeArray }) =>
          sizeArray.map((index) => (
            <S.Star key={index} index={index}>
              {({ isHighlighted }) => {
                if (isHighlighted) return <Star size={20} weight="fill" />
                return <Star size={20} weight="regular" />
              }}
            </S.Star>
          ))
        }
      </S.BookRating>
    </RatingGroup>
  )
}
