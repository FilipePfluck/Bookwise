import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

const textStyles = cva({
  base: {
    textStyle: 'textSm',
    color: 'gray.300',
  },
  variants: {
    isVisible: {
      true: {},
      false: {
        display: 'none',
      },
    },
  },
  defaultVariants: {
    isVisible: true,
  },
})

export const BeginText = styled('p', textStyles)
export const EndText = styled('span', textStyles)

export const ReadMoreButton = styled(
  'span',
  cva({
    base: {
      all: 'unset',
      cursor: 'pointer',
      color: 'purple.100',
      textStyle: 'textSm',
      px: '1',

      outline: 'none',
      _focusVisible: {
        outline: '2px solid token(colors.purple.100)',
      },
    },
  }),
)
