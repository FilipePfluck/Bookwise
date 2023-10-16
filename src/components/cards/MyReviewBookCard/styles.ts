import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const CardContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      gap: '6',
      px: '6',
      py: '5',
      rounded: 'md',
      w: 'full',
      h: 'max-content',
    },
    variants: {
      highlight: {
        true: {
          bg: 'gray.600',
        },
        false: {
          bg: 'gray.700',
        },
      },
    },
    defaultVariants: {
      highlight: false,
    },
  }),
)

export const CardHeader = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      w: 'full',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }),
)

export const PostDate = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.300',
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

export const BookReview = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.300',
    },
  }),
)
