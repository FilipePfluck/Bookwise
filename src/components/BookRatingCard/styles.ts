import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const CardContainer = styled(
  'div',
  cva({
    base: {
      bg: 'gray.700',
      p: '6',
      rounded: 'md',
      display: 'flex',
      flexDir: 'column',
      gap: '8',
    },
  }),
)

export const CardHeader = styled(
  'header',
  cva({
    base: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
)

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

export const CardBody = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      gap: '5',
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
