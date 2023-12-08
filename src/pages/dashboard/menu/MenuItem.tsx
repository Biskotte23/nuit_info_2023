import { Theme } from '../../../models/themes/Theme';
import './MenuItem.scss';

interface MenuItemProps {
  theme: Theme;
  onClick: (theme: Theme) => void;
}

export default function MenuItem({ theme, onClick }: MenuItemProps) {
  return (
    <div className="menu-item" onClick={() => onClick(theme)}>
      <div
        className="menu-item__background"
        style={{ backgroundImage: `url(/assets/images/themes/${theme.image})` }}
      ></div>
      <div className="menu-item__title">{theme.label}</div>
    </div>
  );
}
