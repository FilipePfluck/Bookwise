import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const SearchBarContainer = styled(
  'label',
  cva({
    base: {
      px: '5',
      py: '3',
      rounded: 'sm',
      bg: 'transparent',
      borderColor: 'gray.500',
      borderWidth: '1px',
      borderStyle: 'solid',
      w: '420px',
      display: 'flex',
      alignItems: 'center',
      _focusWithin: {
        borderColor: 'green.200',
      },
      transition: '0.2s',
    },
  }),
)

export const SearchBarInput = styled(
  'input',
  cva({
    base: {
      bg: 'transparent',
      _placeholder: {
        color: 'gray.400',
      },
      color: 'gray.100',
      w: 'full',
      outline: 'none',
    },
  }),
)

export const IconContainer = styled(
  'div',
  cva({
    base: {
      color: 'gray.500',
      _peerFocus: {
        color: 'green.100',
      },
      transition: '0.2s',
    },
  }),
)
