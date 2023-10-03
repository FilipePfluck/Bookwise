import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const Grid = styled(
  'ul',
  cva({
    base: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '5',
    },
  }),
)
