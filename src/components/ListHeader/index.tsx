import { ReactNode } from 'react'
import * as S from './styles'
import { Slot } from '@radix-ui/react-slot'
import Link from 'next/link'

type ListHeaderBaseProps = {
  name: string
  actionLabel: ReactNode
  asChild?: boolean
}

type ListHeaderAsLinkProps = ListHeaderBaseProps & {
  asChild?: false
  actionHref: string
}

type ListHeaderAsChildProps = ListHeaderBaseProps & {
  asChild: true
  children?: ReactNode
}

type ListHeaderProps = ListHeaderAsChildProps | ListHeaderAsLinkProps

export const ListHeader = ({
  actionLabel,
  name,
  asChild,
  ...props
}: ListHeaderProps) => {
  const asChildProps = props as ListHeaderAsChildProps
  const asLinkProps = props as ListHeaderAsLinkProps

  return (
    <S.ListHeader>
      <S.ListName>{name}</S.ListName>
      {asChild ? (
        <Slot className={S.actionStyles()}>{asChildProps.children}</Slot>
      ) : (
        <Link className={S.actionStyles()} href={asLinkProps.actionHref}>
          {actionLabel}
        </Link>
      )}
    </S.ListHeader>
  )
}
