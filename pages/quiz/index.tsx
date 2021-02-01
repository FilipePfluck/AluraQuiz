import db from '../../db.json'

import Quiz from '../../src/pages/Quiz'

const DbQuiz = () => {
    return Quiz({db})
}

export default DbQuiz