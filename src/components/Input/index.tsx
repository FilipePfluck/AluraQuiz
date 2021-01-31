import React, {InputHTMLAttributes} from 'react'

import * as S from './styles'

type input = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<input> = ({...props})=>{
    return(
        <S.Input {...props}/>  
    )
}

export default Input