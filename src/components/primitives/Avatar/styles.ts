import { Avatar } from '@ark-ui/react'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

export const Background = styled(
  Avatar.Root,
  cva({
    base: {
      bgGradient: 'to-b',
      gradientFrom: 'green.100',
      gradientTo: 'purple.100',
      rounded: 'full',
    },
    variants: {
      size: {
        md: {
          w: '12',
          h: '12',
        },
        lg: {
          w: '72px',
          h: '72px',
        },
      },
    },
  }),
)

const avatarStyles = cva({
  base: {
    rounded: 'full',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mt: '1px',
    ml: '1px',
    color: 'gray.200',
  },
  variants: {
    size: {
      md: {
        w: '46px',
        h: '46px',
      },
      lg: {
        w: '70px',
        h: '70px',
      },
    },
  },
})

export const AvatarImage = styled(Avatar.Image, avatarStyles)

export const AvatarFallback = styled(Avatar.Fallback, avatarStyles)
