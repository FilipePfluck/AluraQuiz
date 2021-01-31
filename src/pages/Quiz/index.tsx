import React, { useCallback, FormEvent, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import db from '../../../db.json'

import * as S from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const Quiz = ()=>{
    const router = useRouter()

    const numberOfQuestions = db.questions.length

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [alternative, setAlternative] = useState(0)

    const question = db.questions[currentQuestion]

    const handleNextQuestion = useCallback(()=>{
        if(alternative == question.answer){
            console.log('certo')
        }else{
            console.log('errado')
        }
        
        if(currentQuestion + 1 === numberOfQuestions){
            console.log('a')
            return
        }

        setCurrentQuestion(state => state+1)
    },[currentQuestion, numberOfQuestions])

    return (
        <S.Background backgroundImage={db.bg}>
          <S.QuizContainer>
    
            <S.Widget>
              <S.WidgetHeader>
                <h1>Pergunta {currentQuestion + 1} de {numberOfQuestions}</h1>
              </S.WidgetHeader>
              <S.Image src={question.image}/>
              <S.WidgetContent>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                {question.alternatives.map((alternative, index) => (
                    <S.Alternative htmlFor={'_'+index}>
                        <input 
                            onChange={() => setAlternative(index)}
                            type="radio" 
                            id={'_'+index}  
                            value={alternative}
                            name="alternative"
                        />
                        {alternative}
                    </S.Alternative>
                ))}
                <Button onClick={handleNextQuestion}>Confirmar</Button>
                
              </S.WidgetContent>
            </S.Widget>
          </S.QuizContainer>
        </S.Background>
      )
}

export default Quiz