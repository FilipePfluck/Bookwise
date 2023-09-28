import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const BookContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      gap: '5',
      px: '5',
      py: '4',
      rounded: 'md',
      bg: 'gray.700',
      w: '80',
    },
  }),
)

export const BookName = styled(
  'strong',
  cva({
    base: {
      textStyle: 'headingXs',
      color: 'gray.100',
    },
  }),
)

export const BookAuthor = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.400',
    },
  }),
)
