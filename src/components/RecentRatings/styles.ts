import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const RecentRatings = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.100',
      mb: '1',
      py: '1',
    },
  }),
)
