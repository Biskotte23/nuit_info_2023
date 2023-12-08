import { Theme, themes } from '../../../models/themes/Theme';
import './Menu.scss';
import MenuItem from './MenuItem';

interface MenuProps {
  onItemClick: (theme: Theme) => void;
}

export default function Menu({ onItemClick }: MenuProps) {
  const orderedthemes: Theme[] = [
    themes.energy,
    themes.wind,
    themes.forest,
    themes.sea,
    themes.pollution
  ];

  return (
    <div className="menu">
      {orderedthemes.map((theme) => (
        <MenuItem key={theme.id} theme={theme} onClick={onItemClick} />
      ))}
    </div>
  );
}
