'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react'
import * as S from './styles'

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <S.SidebarContainer style={{ backgroundImage: 'url(/sidebar-bg.png)' }}>
      <Image src="/Logo.svg" alt="Bookwise" width={128} height={32} />
      <nav>
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
        </S.NavList>
      </nav>
      <S.LoginButton>
        Fazer Login
        <SignIn size={24} color="var(--colors-green-100)" />
      </S.LoginButton>
    </S.SidebarContainer>
  )
}
