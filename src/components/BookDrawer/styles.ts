import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Dialog } from '@ark-ui/react'

export const Overlay = styled(
  Dialog.Backdrop,
  cva({
    base: {
      position: 'fixed',
      inset: '0px',
      bg: 'rgba(0,0,0,0.6)',
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
      gap: '10',
      bg: 'gray.800',
      boxShadow: 'lg',
      position: 'fixed',
      top: '0',
      bottom: '0',
      right: '0',
      w: '700px',
      px: '12',
      py: '16',

      overflowY: 'auto',

      '&[data-state="open"]': {
        animation: 'drawerSlideIn',
      },
      '&[data-state="closed"]': {
        animation: 'drawerSlideOut',
      },
    },
  }),
)

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
