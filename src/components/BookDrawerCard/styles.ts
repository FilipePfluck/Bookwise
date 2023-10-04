import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const CardContainer = styled(
  'div',
  cva({
    base: {
      px: '8',
      py: '5',
      display: 'flex',
      flexDir: 'column',
      gap: '10',
      rounded: 'lg',
      bg: 'gray.700',
      outline: 'none',
    },
  }),
)

export const BookInfo = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      h: 'full',
    },
  }),
)

export const BookTitle = styled(
  'strong',
  cva({
    base: {
      textStyle: 'headingSm',
      color: 'gray.100',
    },
  }),
)

export const BookAuthor = styled(
  'p',
  cva({
    base: {
      textStyle: 'textMd',
      color: 'gray.300',
    },
  }),
)

export const AmountOfRatings = styled(
  'span',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.400',
    },
  }),
)

export const BookBottomInfo = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      gap: '14',
      py: '6',
      borderTop: '1px solid token(colors.gray.600)',
    },
  }),
)

export const BottomInfoItem = styled(
  'div',
  cva({
    base: {
      px: '1',
      display: 'flex',
      gap: '4',
      alignItems: 'center',
      w: 'full',
      color: 'green.100',
    },
  }),
)

export const BottomInfoLabel = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.300',
    },
  }),
)

export const BottomInfoValue = styled(
  'p',
  cva({
    base: {
      textStyle: 'headingXs',
      color: 'gray.100',
    },
  }),
)
