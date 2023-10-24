import * as S from './styles'

export const Tags = () => {
  return (
    <S.TagsContainer defaultValue={['all']}>
      <S.Tag value="all">Tudo</S.Tag>
      <S.Tag value="cs">Computação</S.Tag>
      <S.Tag value="education">Educação</S.Tag>
      <S.Tag value="fantasy">Fantasia</S.Tag>
      <S.Tag value="scifi">Ficção científica</S.Tag>
      <S.Tag value="horror">Horror</S.Tag>
      <S.Tag value="comics">Quadrinhos</S.Tag>
      <S.Tag value="thriller">Suspense</S.Tag>
    </S.TagsContainer>
  )
}
