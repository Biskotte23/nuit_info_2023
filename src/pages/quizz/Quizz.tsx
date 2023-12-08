import { Modal } from 'antd';
import { Theme } from '../../models/themes/Theme';
import quizs from '../../assets/theQuiz/quiz.json';
import { ThemeEnum } from '../../models/themes/ThemeEnum';
import ThemeQuiz from './quizzies/ThemeQuiz';

interface QuizzProps {
  theme: Theme;
  onClose: () => void;
}


let quizzies: object = quizs;

export default function Quizz({ theme, onClose }: QuizzProps) {
  let quizz;

  switch (theme.id) {
    case ThemeEnum.Sea:
      quizz = <ThemeQuiz questions={quizzies.themes[0]} />;
      break;

    case ThemeEnum.Forest:
      quizz = <ThemeQuiz questions={quizzies.themes[1]} />;
      break;

    case ThemeEnum.Energy:
      quizz = <ThemeQuiz questions={quizzies.themes[2]} />;
      break;

    case ThemeEnum.Wind:
      quizz = <ThemeQuiz questions={quizzies.themes[3]} />;
      break;

    case ThemeEnum.Pollution:
      quizz = <ThemeQuiz questions={quizzies.themes[4]} />;
      break;
  }

  return (
    <Modal open={true} centered={true} onCancel={onClose} cancelText="Fermer">
      <h1>Quizz sur "{theme.label}"</h1>
      {quizz ? quizz : undefined}
    </Modal>
  );
}
