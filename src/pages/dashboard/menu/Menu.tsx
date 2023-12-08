import { Theme } from '../../../models/themes/Theme';
import { ThemeEnum } from '../../../models/themes/ThemeEnum';
import './Menu.scss';
import MenuItem from './MenuItem';

interface MenuProps {
  onItemClick: (theme: Theme) => void;
}

export default function Menu({ onItemClick }: MenuProps) {
  const themes: Theme[] = [
    {
      id: ThemeEnum.Energy,
      label: 'Energies',
      image: 'energies.jpg'
    },
    {
      id: ThemeEnum.Wind,
      label: 'Vents',
      image: 'windmill.png'
    },

    {
      id: ThemeEnum.Forest,
      label: 'Forêts',
      image: 'forest.jpg'
    },
    {
      id: ThemeEnum.Sea,
      label: 'Milieu marin',
      image: 'sea.jpg'
    },
    {
      id: ThemeEnum.Pollution,
      label: 'Pollution',
      image: 'pollution.jpg'
    }
  ];

  return (
    <div className="menu">
      {themes.map((theme) => (
        <MenuItem theme={theme} onClick={onItemClick} />
      ))}
    </div>
  );
}
