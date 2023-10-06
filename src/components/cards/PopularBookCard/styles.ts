import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const BookContainer = styled(
  'div',
  cva({
    base: {
      cursor: 'pointer',
      display: 'flex',
      gap: '5',
      px: '5',
      py: '4',
      rounded: 'md',
      bg: 'gray.700',
      w: 'full',
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

export const imageStyles = cva({
  base: {},
  variants: {
    size: {
      sm: { w: '16', h: '94px', rounded: 'sm' },
      md: { w: '108px', h: '152px', rounded: 'md' },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})
