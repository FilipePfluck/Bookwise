import { Portal } from '@ark-ui/react'
import * as S from './styles'
import { Flex } from '@/styled-system/jsx'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { X } from 'phosphor-react'

export const LoginModal = () => (
  <Portal>
    <S.Overlay />
    <S.Container>
      <S.Content>
        <S.Title>Faça login para deixar sua avaliação</S.Title>
        <Flex direction="column" gap="4">
          <S.LoginButton>
            <FaGoogle size={24} />
            Entrar com Google
          </S.LoginButton>
          <S.LoginButton>
            <FaGithub size={24} />
            Entrar com Github
          </S.LoginButton>
        </Flex>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
      </S.Content>
    </S.Container>
  </Portal>
)
