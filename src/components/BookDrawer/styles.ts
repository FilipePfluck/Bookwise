import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Dialog } from '@ark-ui/react'

export const Overlay = styled(
  Dialog.Backdrop,
  cva({
    base: {
      position: 'fixed',
      inset: '0px',
      bg: 'rgba(0,0,0,0.4)',
    },
  }),
)

export const DrawerContainer = styled(
  Dialog.Container,
  cva({
    base: {},
  }),
)

export const DrawerContent = styled(
  Dialog.Content,
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      bg: 'gray.800',
      boxShadow: 'lg',
      position: 'fixed',
      top: '0',
      bottom: '0',
      right: '0',
      w: '660px',
      px: '12',
      py: '16',

      '&[data-state="open"]': {
        animation: 'drawerSlideIn',
      },
      '&[data-state="closed"]': {
        animation: 'drawerSlideOut',
      },
    },
  }),
)
