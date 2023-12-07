import './Trophy.scss';

interface TrophyProps {
  image: string;
  label: string;
  isGetted: boolean;
}

export default function Trophy({ image, label, isGetted }: TrophyProps) {
  return (
    <div className="trophy">
      <img
        className={`trophy__image ${!isGetted ? 'trophy__image--won' : ''}`}
        src={image}
        alt={`Trophée ${label}`}
      />
    </div>
  );
}
