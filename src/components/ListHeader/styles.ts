import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import Link from 'next/link'

export const ListHeader = styled(
  'div',
  cva({
    base: {
      w: 'full',
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

export const Action = styled(
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
