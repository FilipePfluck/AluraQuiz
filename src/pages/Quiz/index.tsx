import React, { useCallback, FormEvent, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const Quiz = ({db})=>{
    const router = useRouter()

    const numberOfQuestions = db.questions.length

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [alternative, setAlternative] = useState(-1)
    const [numberOfRightQuestions, setNumberOfRightQuestions] = useState(0)
    const [isChanging, setIsChanging] = useState(false)
    const [hasEnded, setHasEnded] = useState(false)

    const question = db.questions[currentQuestion]

    const handleNextQuestion = useCallback(()=>{
        setIsChanging(true)

        if(alternative === -1){
          return
        }

        if(alternative == question.answer){
            setNumberOfRightQuestions(state => state + 1)
        }else{
            console.log('errado')
        }

        if(currentQuestion + 1 === numberOfQuestions){
            setHasEnded(true)
            return
        }

        setTimeout(()=>{
          setCurrentQuestion(state => state+1)
          setIsChanging(false)
        },700)
          
    },[currentQuestion, numberOfQuestions, alternative])

    return (
        <S.Background backgroundImage={db.bg}>
          {!hasEnded && (<S.QuizContainer>
    
            <S.Widget>
              <S.WidgetHeader>
                <h1>Pergunta {currentQuestion + 1} de {numberOfQuestions}</h1>
              </S.WidgetHeader>
              <S.Image src={question.image}/>
              <S.WidgetContent>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                {question.alternatives.map((alt, index) => (
                  <S.Alternative 
                    htmlFor={'_'+index} 
                    key={index}
                    isChanging={isChanging}
                    isSelected = {index == alternative}
                    answer = {''+question.answer}
                    id= {''+index}
                    >
                    <S.Option
                      onChange={() =>  setAlternative(index) }
                      type="radio" 
                      name="alternative"
                      id={'_'+index}
                    />
                    {alt}
                  </S.Alternative>
                ))}
                <Button onClick={handleNextQuestion}>Confirmar</Button>
                
              </S.WidgetContent>
            </S.Widget>
          </S.QuizContainer>)}
                  
          {hasEnded && (
            <S.QuizContainer>
              <S.Widget>
                <S.WidgetHeader>{db.title}</S.WidgetHeader>
                <S.WidgetContent>
                  <h2>Você acertou {numberOfRightQuestions} de {numberOfQuestions}</h2>
                </S.WidgetContent>
              </S.Widget>
            </S.QuizContainer>
          )}
        </S.Background>
      )
}

export default Quiz