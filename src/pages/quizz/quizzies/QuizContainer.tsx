import { nanoid } from 'nanoid';

interface Question {
  question: string;
  options: {
    value: string;
    isCorrect: boolean;
  }[],
  response: string;
}

interface QuizContainerProps {
  questions: Question[];
  onChangeState: (response: string) => void;
}

export default function QuizContainer({ questions, onChangeState }: QuizContainerProps) {
  return (
    <>
    {questions?.map(question => {
        return (
            <div key={nanoid()}>
            <h1>{question.question}</h1>
            {question.options?.map(option => {
                return (
                <div key={nanoid()}>
                    <input
                    type="radio"
                    name={question.question}
                    value={option.value}
                    onChange={() => onChangeState(option.value)}
                    />
                    <label>{option.value}</label>
                </div>
                );
            })}
            </div>
        );
    })}
    </>
  );
}
