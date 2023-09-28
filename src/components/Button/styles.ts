import { RecipeVariantProps, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

const buttonStyles = cva({
  base: {
    bg: 'purple.200',
    m: '2',
    rounded: 'lg',
  },
  variants: {
    buttonSize: {
      sm: {
        p: '2',
      },
      md: {
        p: '4',
      },
      lg: {
        p: '6',
      },
    },
  },
})

export const ButtonContainer = styled('button', buttonStyles)
export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>
