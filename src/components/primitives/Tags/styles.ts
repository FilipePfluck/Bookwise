import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { ToggleGroup } from '@ark-ui/react'

export const TagsContainer = styled(
  ToggleGroup.Root,
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: '3',
    },
  }),
)

export const Tag = styled(
  ToggleGroup.Toggle,
  cva({
    base: {
      cursor: 'pointer',
      rounded: 'full',
      px: '4',
      py: '1',
      bg: 'transparent',
      transition: '0.2s',

      color: 'purple.100',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'purple.100',

      '&[data-state="on"]': {
        color: 'gray.100',
        bg: 'purple.200',
        borderColor: 'purple.200',
      },
    },
  }),
)
