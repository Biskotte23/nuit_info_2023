import { Theme } from '../../models/themes/Theme';
import { quizz } from '../../models/quizz/Quizz';
import './Quizz.scss';
import Question from './Question';
import { Modal } from 'antd';
import { useState } from 'react';

interface QuizzProps {
  theme: Theme;
  onClose: () => void;
  onConfirm: (isWin: boolean) => void;
}

export default function Quizz({ theme, onClose, onConfirm }: QuizzProps) {
  const questions = quizz.questions[theme.id];
  const [results, setResults] = useState<number[]>(
    Array.from({ length: questions.length }, () => 1)
  );

  function isWin() {
    let won = true;

    try {
      questions.forEach((q, index) => {
        if (results[index] !== q.response) {
          throw 'Wrong answer';
        }
      });
    } catch (e) {
      won = false;
    }

    return won;
  }

  function editResults(index: number, response: number) {
    const updatedResults: number[] = [];

    results.forEach((r, i) => {
      updatedResults.push(i === index ? response : r);
    });

    setResults(updatedResults);
  }

  function handleOnConfirm() {
    onConfirm(isWin());
  }

  return (
    <div className="quizz">
      <Modal
        open={true}
        centered={true}
        onCancel={onClose}
        cancelText="Fermer"
        okText="Valider"
        onOk={handleOnConfirm}
        title={`Quizz "${theme.label}"`}
      >
        {questions.map((q, index) => (
          <Question key={q.question} question={q} onClick={(id) => editResults(index, id)} />
        ))}
      </Modal>
    </div>
  );
}
