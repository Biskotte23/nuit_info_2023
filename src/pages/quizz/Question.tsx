import { Radio, RadioChangeEvent } from 'antd';
import { QuizzQuestion } from '../../models/quizz/QuizzJson';
import './Question.scss';
import { useState } from 'react';

interface QuestionProps {
  question: QuizzQuestion;
  onClick: (id: number) => void;
}

export default function Question({ question, onClick }: QuestionProps) {
  const [value, setValue] = useState<number>(1);

  const onChange = (e: RadioChangeEvent) => {
    const id = e.target.value;
    setValue(id);
    onClick(id);
  };

  return (
    <div className="question">
      <h2 className="question__label">{question.question}</h2>
      <Radio.Group className="options" onChange={onChange} value={value}>
        {question.options.map((o) => (
          <Radio key={o.id} value={o.id}>
            {o.value}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
}
