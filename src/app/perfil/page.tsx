import { Sidebar } from '@/components/Sidebar'
import * as S from './styles'
import { MyReviewBookCard } from '@/components/cards/MyReviewBookCard'
import { Profile } from '@/components/Profile'
import { Flex } from '@/styled-system/jsx'

export default function Perfil() {
  return (
    <>
      <Sidebar />
      <S.PageContent>
        <Flex gap="16">
          <MyReviewBookCard
            highlight
            bookName="A revolução dos bichos"
            bookAuthor="George Orwell"
            publishedOn="Hoje"
            bookReview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit culpa aut dolore doloremque provident libero quibusdam dolor et, nam iste consequuntur voluptatibus, harum earum illum asperiores assumenda, facilis quia ab."
            bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
            rating={3}
          />
          <Profile />
        </Flex>
      </S.PageContent>
    </>
  )
}
