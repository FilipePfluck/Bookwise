import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const ProfileContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      flexDir: 'column',
      gap: '8',
      minW: '80',
      borderLeft: '1px solid token(colors.gray.700)',
    },
  }),
)

export const TopSection = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      alignItems: 'center',
      gap: '5',
    },
  }),
)

export const BottomSection = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      alignItems: 'start',
      gap: '10',
      px: '14',
    },
  }),
)

export const ProfileEntry = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: '5',
    },
  }),
)

export const ProfileEntryValue = styled(
  'p',
  cva({
    base: {
      textStyle: 'headingXs',
      color: 'gray.200',
    },
  }),
)

export const ProfileEntryLabel = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.300',
    },
  }),
)

export const Separator = styled(
  'div',
  cva({
    base: {
      w: '8',
      h: '1',
      rounded: 'full',
      bgGradient: 'to-r',
      gradientFrom: 'green.100',
      gradientTo: 'purple.100',
    },
  }),
)

export const UserName = styled(
  'strong',
  cva({
    base: {
      textStyle: 'headingMd',
      color: 'gray.100',
    },
  }),
)

export const MemberSince = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.400',
    },
  }),
)
