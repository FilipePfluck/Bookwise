'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'
import * as S from './styles'

const Nav = ({ pathname }: { pathname: string }) => {
  return (
    <S.Nav navigation="desktop">
      <S.NavList>
        <li>
          <S.NavItem href="/" isSelected={pathname === '/'}>
            <ChartLineUp size={24} /> Ínicio
          </S.NavItem>
        </li>

        <li>
          <S.NavItem href="/explorar" isSelected={pathname === '/explorar'}>
            <Binoculars size={24} /> Explorar
          </S.NavItem>
        </li>

        <li>
          <S.NavItem href="/perfil" isSelected={pathname === '/perfil'}>
            <User size={24} /> Perfil
          </S.NavItem>
        </li>
      </S.NavList>
    </S.Nav>
  )
}

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <S.SidebarContainer style={{ backgroundImage: 'url(/sidebar-bg.png)' }}>
      <Image src="/Logo.svg" alt="Bookwise" width={128} height={32} />
      <Nav pathname={pathname} />
      <S.LoginButton href="/login" hideBelow="lg">
        Fazer Login
        <SignIn size={24} color="var(--colors-green-100)" />
      </S.LoginButton>
    </S.SidebarContainer>
  )
}
