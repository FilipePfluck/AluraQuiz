import db from '../db.json'

import * as S from '../styles/Home'

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <S.Background backgroundImage={db.bg}>
      <S.QuizContainer>

        <S.Widget>
          <S.WidgetHeader>
            <h1>{db.title}</h1>
          </S.WidgetHeader>
          <S.WidgetContent>
            <p>{db.description}</p>
          </S.WidgetContent>
        </S.Widget>

        <S.Widget>
          <S.WidgetContent>
              <h1>Quizes da Galera</h1>
              <p>Lorem ipsum dolor sit amet...</p>
          </S.WidgetContent>
        </S.Widget>
      </S.QuizContainer>
    </S.Background>
  )
}
