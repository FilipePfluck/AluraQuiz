import React, {ButtonHTMLAttributes} from 'react'

import * as S from './styles'

type button = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<button> = ({children, ...rest})=>{
    return(
        <S.Button {...rest}>
            {children}
        </S.Button>
    )
}

export default Button