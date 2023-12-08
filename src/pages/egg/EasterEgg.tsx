import { Button, Modal } from 'antd';
import { Trophy } from '../../models/trophies/Trophy';
import './EasterEgg.scss';
import { TrophyEnum } from '../../models/trophies/TrophyEnum';

interface EasterEggProps {
  trophy: Trophy;
  onClose: (trophy: TrophyEnum) => void;
}

export default function EasterEgg({ trophy, onClose }: EasterEggProps) {
  return (
    <Modal
      open={true}
      onCancel={() => onClose(trophy.id)}
      cancelText="Fermer"
      title="Vous venez de trouver un trophé caché ! 🎉"
      footer={[
        <Button key="back" type="primary" onClick={() => onClose(trophy.id)}>
          Fermer
        </Button>
      ]}
    >
      <div className="easter-egg">
        <h1 className="easter-egg__title">{trophy.label}</h1>
        <img
          className="easter-egg__image"
          src={`/assets/images/easter_eggs/${trophy.image}`}
          alt="Easter egg"
        />
      </div>
    </Modal>
  );
}
