import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const PageContainer = styled(
  'main',
  cva({
    base: {
      h: '100vh',
      w: '100vw',
      p: '5',
      display: 'flex',
    },
  }),
)

export const Aside = styled(
  'aside',
  cva({
    base: {
      h: 'full',
      w: '30%',
      bgRepeat: 'no-repeat',
      bgPosition: 'center',
      bgSize: 'cover',
    },
  }),
)

export const LoginContainer = styled(
  'div',
  cva({
    base: {
      m: 'auto',
      display: 'flex',
      flexDir: 'column',
      gap: '10',
    },
  }),
)

export const LoginTitle = styled(
  'h1',
  cva({
    base: {
      textStyle: 'headingLg',
      color: 'gray.100',
    },
  }),
)

export const LoginText = styled(
  'p',
  cva({
    base: {
      textStyle: 'textMd',
      color: 'gray.200',
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
