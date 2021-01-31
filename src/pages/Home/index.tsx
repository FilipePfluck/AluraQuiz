import React, { useCallback, FormEvent, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import db from '../../../db.json'

import * as S from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

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
                  <Input 
                    placeholder="Diz aí seu nome"
                    onChange={e => setName(e.target.value)}
                  />
                  <Button 
                    type="submit"
                    disabled={name.length === 0}
                  >
                    Jogar 
                  </Button>
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