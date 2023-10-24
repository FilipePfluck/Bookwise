import { Dialog } from '@ark-ui/react'

import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const Overlay = styled(
  Dialog.Backdrop,
  cva({
    base: {
      base: {
        position: 'fixed',
        inset: '0px',
        bg: 'rgba(0,0,0,0.6)',
      },
    },
  }),
)

export const Container = styled(
  Dialog.Container,
  cva({
    base: {},
  }),
)

export const Content = styled(
  Dialog.Content,
  cva({
    base: {
      rounded: 'lg',
      bg: 'gray.700',
      py: '14',
      px: '16',
      display: 'flex',
      flexDir: 'column',
      gap: '10',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      minW: '516px',
      outline: 'none',
    },
  }),
)

export const Title = styled(
  'p',
  cva({
    base: {
      textStyle: 'headingXs',
      color: 'gray.200',
      textAlign: 'center',
      w: 'full',
    },
  }),
)

export const LoginButton = styled(
  'button',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: '5',
      px: '6',
      py: '5',
      rounded: 'lg',
      bg: 'gray.600',
      _hover: {
        bg: 'gray.500',
      },
      transition: '0.2s',
      cursor: 'pointer',
      textStyle: 'buttonLg',
      color: 'gray.200',
    },
  }),
)

export const CloseButton = styled(
  Dialog.CloseTrigger,
  cva({
    base: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      cursor: 'pointer',
      p: '2',
      color: 'gray.400',
    },
  }),
)
