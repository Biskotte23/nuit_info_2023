import {useState} from 'react';
import QuizContainer from './quizContainer';

interface themeQuestion {
    theme: string;
    questions: object[];
}

export default function ThemeQuiz({questions}:themeQuestion)
{
    const [AllResponses, setCurrentResponse] = useState<Object>([]);
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(AllResponses);
      }
  return (
    <form onSubmit={e=>handleSubmit(e)}>
        {questions?.map(qcms => {
            return (
                <QuizContainer question={qcms} setCurrentResponse={setCurrentResponse}/>
            )
        })}
    </form>
    );
}

