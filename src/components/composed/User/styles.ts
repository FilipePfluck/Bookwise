import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const RatingAuthor = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      gap: '4',
      alignItems: 'center',
    },
  }),
)

export const UserName = styled(
  'p',
  cva({
    base: {
      textStyle: 'textMd',
      color: 'gray.100',
    },
  }),
)

export const PublishedOn = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.400',
    },
  }),
)
