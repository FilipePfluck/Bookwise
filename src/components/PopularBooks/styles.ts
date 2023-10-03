import Link from 'next/link'
import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const ListHeading = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }),
)

export const ListName = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.100',
    },
  }),
)

export const SeeAll = styled(
  Link,
  cva({
    base: {
      px: '2',
      py: '1',
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      textStyle: 'buttonSm',
      color: 'purple.100',
    },
  }),
)

export const BookList = styled(
  'ul',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '3',
      w: '80',
    },
  }),
)
