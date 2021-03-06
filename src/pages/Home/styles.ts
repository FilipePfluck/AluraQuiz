import styled from 'styled-components'

import NextLink from 'next/link'

interface BackgroundProps{
    backgroundImage: string
}

export const Background = styled.div<BackgroundProps>`
    width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const Widget = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => {
        return theme.colors.mainBg;
    }};
    border-radius: 4px;
    overflow: hidden;

    h1, h2, h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
    }
`

export const WidgetHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

export const WidgetContent = styled.div`
  h1{
    margin-bottom: 16px;
  }

  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export const WidgetTopic = styled(NextLink)`

      outline: 0;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.contrastText};
      background-color: ${({ theme }) => `${theme.colors.primary}40`};
      padding: 10px 15px;
      margin-bottom: 8px;
      cursor: pointer;
      border-radius: 4;
      transition: .3s;
      display: block;
      
      &:hover,
      &:focus {
          opacity: .5;
      }

`