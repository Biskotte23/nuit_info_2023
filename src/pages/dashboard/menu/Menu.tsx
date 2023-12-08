import './Menu.scss';
import MenuItem from './MenuItem';

interface Theme {
  label: string;
  image: string;
}

export default function Menu() {
  const themes: Theme[] = [
    {
      label: 'Energies',
      image: 'energies.jpg'
    },
    {
      label: 'Vents',
      image: 'windmill.png'
    },

    {
      label: 'Forêts',
      image: 'forest.jpg'
    },
    {
      label: 'Milieu marin',
      image: 'sea.jpg'
    },
    {
      label: 'Pollution',
      image: 'pollution.jpg'
    }
  ];

  return (
    <div className="menu">
      {themes.map((theme) => (
        <MenuItem label={theme.label} image={theme.image} />
      ))}
    </div>
  );
}
