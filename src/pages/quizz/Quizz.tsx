import { Modal } from 'antd';
import { Theme } from '../../models/themes/Theme';

interface QuizzProps {
  theme: Theme;
  onClose: () => void;
}

export default function Quizz({ theme, onClose }: QuizzProps) {
  return (
    <Modal open={true} centered={true} onCancel={onClose} cancelText="Fermer">
      <h1>Quizz sur "{theme.label}"</h1>
    </Modal>
  );
}
