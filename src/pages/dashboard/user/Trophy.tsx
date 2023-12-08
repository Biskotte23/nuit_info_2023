import './Trophy.scss';

interface TrophyProps {
  image: string;
  label: string;
  isGetted: boolean;
  onClick: () => void;
}

export default function Trophy({ image, label, isGetted, onClick }: TrophyProps) {
  return (
    <div className="trophy" onClick={onClick}>
      <img
        className={`trophy__image ${!isGetted ? 'trophy__image--won' : ''}`}
        src={image}
        alt={`Trophée ${label}`}
      />
    </div>
  );
}
