'use client'

import { useState } from 'react'
import * as S from './styles'

type ReadMoreProps = {
  id: string
  text: string
  amountOfWords?: number
}

export const ReadMore = ({ id, text, amountOfWords = 48 }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const splittedText = text.split(' ')
  const itCanOverflow = splittedText.length > amountOfWords
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(' ')
    : text
  const endText = splittedText.slice(amountOfWords - 1).join(' ')

  return (
    <S.BeginText id={id}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <span>... </span>}
          <S.EndText isVisible={isExpanded} aria-hidden={!isExpanded}>
            {' '}
            {endText}
          </S.EndText>
          <S.ReadMoreButton
            role="button"
            tabIndex={0}
            onClick={() => setIsExpanded(!isExpanded)}
            onKeyDown={(e) => {
              if (e.code === 'Space' || e.code === 'Enter') {
                setIsExpanded(!isExpanded)
              }
            }}
            aria-expanded={isExpanded}
            aria-controls={id}
          >
            {isExpanded ? 'ver menos' : 'ver mais'}
          </S.ReadMoreButton>
        </>
      )}
    </S.BeginText>
  )
}
