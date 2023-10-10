import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const PageContent = styled(
  'main',
  cva({
    base: {
      px: '24',
      py: '72px',
      ml: '252px',
      maxW: 'calc(100vw - 252px)',
      display: 'flex',
      flexDir: 'column',
      gap: '12',
    },
  }),
)
