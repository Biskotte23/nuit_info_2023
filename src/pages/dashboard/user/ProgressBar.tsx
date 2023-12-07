import './ProgressBar.scss';

interface ProgressBarProps {
  label: string;
  progression: number;
  color: string;
}

export default function ProgressBar({ label, progression, color }: ProgressBarProps) {
  return (
    <div className="progression">
      <p className="progression__label">{`${label} :`}</p>
      <div className="progression-bar">
        <div
          className="progression-bar__completed"
          style={{ width: `${progression}%`, backgroundColor: color }}
        ></div>
      </div>
      <p className="progression__score">{`${progression}%`}</p>
    </div>
  );
}
