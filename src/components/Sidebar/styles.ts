import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import Link from 'next/link'

export const SidebarContainer = styled(
  'aside',
  cva({
    base: {
      position: 'fixed',
      top: '4',
      bottom: '4',
      left: '4',
      bg: 'gray.700',
      w: '232px',
      rounded: 'lg',
      p: '12',
      display: 'flex',
      flexDir: 'column',
      gap: '16',
      bgSize: 'cover',
      bgRepeat: 'no-repeat',
    },
  }),
)

export const NavList = styled(
  'ul',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '4',
    },
  }),
)

export const NavItem = styled(
  Link,
  cva({
    base: {
      w: 'full',
      px: '4',
      py: '2',
      display: 'flex',
      alignItems: 'center',
      gap: '3',
      position: 'relative',
    },
    variants: {
      isSelected: {
        true: {
          color: 'gray.100',
          _before: {
            content: "''",
            w: '1',
            h: '6',
            rounded: 'full',
            position: 'absolute',
            left: '0',
            bgGradient: 'to-b',
            gradientFrom: 'green.100',
            gradientTo: 'purple.100',
          },
        },
        false: {
          color: 'gray.400',
        },
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  }),
)

export const LoginButton = styled(
  Link,
  cva({
    base: {
      p: '1',
      textStyle: 'buttonMd',
      color: 'gray.200',
      display: 'flex',
      gap: '3',
      alignItems: 'center',
      cursor: 'pointer',
      mt: 'auto',

      outline: 'none',
      _focusVisible: {
        outline: '2px solid token(colors.purple.100)',
      },
    },
  }),
)
