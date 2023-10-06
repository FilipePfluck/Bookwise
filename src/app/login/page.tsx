'use client'

import { FaGithub, FaGoogle } from 'react-icons/fa'
import { RocketLaunch } from 'phosphor-react'

import { Flex } from '@/styled-system/jsx'
import * as S from './styles'

export default function Login() {
  return (
    <S.PageContainer>
      <S.Aside style={{ backgroundImage: 'url(/login.svg)' }}></S.Aside>
      <S.LoginContainer>
        <Flex direction="column">
          <S.LoginTitle>Boas vindas</S.LoginTitle>
          <S.LoginText>Faça seu login ou acesse como visitante.</S.LoginText>
        </Flex>
        <Flex direction="column" gap="4">
          <S.LoginButton>
            <FaGoogle size={24} />
            Google
          </S.LoginButton>
          <S.LoginButton>
            <FaGithub size={24} />
            Github
          </S.LoginButton>
          <S.LoginButton>
            <RocketLaunch size={24} />
            Acesse como visitante
          </S.LoginButton>
        </Flex>
      </S.LoginContainer>
    </S.PageContainer>
  )
}
