import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const CardContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '5',
      p: '6',
      rounded: 'lg',
      bg: 'gray.700',
      w: 'full',
    },
  }),
)

export const CardHeader = styled(
  'header',
  cva({
    base: {
      w: 'full',
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
)

export const ReviewText = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.300',
    },
  }),
)
