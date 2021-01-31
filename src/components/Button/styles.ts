import styled from 'styled-components'

export const Button = styled.button`
  height: 32px;
  width: 100%;

  margin-top: 16px;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 4px;
  color: ${props => props.theme.colors.contrastText};
  background-color: ${props => props.theme.colors.primary};
  transition: 0.2s;

  &:hover{
    filter: brightness(0.9);
  }

  &:disabled{
    background-color: #796c82;
  }
`