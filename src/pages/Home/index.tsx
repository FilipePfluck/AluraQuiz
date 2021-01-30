import React, { useCallback, FormEvent, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

import db from '../../../db.json'

const Home = ()=>{
    const router = useRouter()

    const [name, setName] = useState('')

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault()

      console.log(name)

      router.push(`/quiz?name=${name}`)
    },[name])

    return (
        <S.Background backgroundImage={db.bg}>
          <S.QuizContainer>
    
            <S.Widget>
              <S.WidgetHeader>
                <h1>{db.title}</h1>
              </S.WidgetHeader>
              <S.WidgetContent>
                <p>{db.description}</p>
                <form onSubmit={handleSubmit}>
                  <S.Input 
                    placeholder="Diz aí seu nome"
                    onChange={e => setName(e.target.value)}
                  />
                  <S.Button 
                    type="submit"
                    disabled={name.length === 0}
                  >
                    Jogar 
                  </S.Button>
                </form>
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

export default Home