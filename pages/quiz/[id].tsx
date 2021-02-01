import React from 'react'

import Quiz from '../../src/pages/Quiz'

const QuizDaGalera = ({dbExterno})=>{
    return(
        Quiz({db: dbExterno})
    )
}

export async function getServerSideProps(context){
    const [projectName, githubUser] = context.query.id.split('.')

    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((response) => response)

    return {
        props: {
            dbExterno
        }
    }
}

export default QuizDaGalera