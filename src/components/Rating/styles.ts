import { Rating, RatingGroupControl } from '@ark-ui/react'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

export const BookRating = styled(
  RatingGroupControl,
  cva({
    base: {
      display: 'flex',
      gap: '1',
    },
  }),
)

export const Star = styled(
  Rating,
  cva({
    base: {
      color: 'purple.100',
    },
  }),
)
