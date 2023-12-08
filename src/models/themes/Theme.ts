import { ThemeEnum } from './ThemeEnum';

export interface Theme {
  id: ThemeEnum;
  label: string;
  image: string;
}

export const themes = {
  [ThemeEnum.Energy]: {
    id: ThemeEnum.Energy,
    label: 'Énergies',
    image: 'energies.jpg'
  },
  [ThemeEnum.Forest]: {
    id: ThemeEnum.Forest,
    label: 'Forêts',
    image: 'forest.jpg'
  },
  [ThemeEnum.Pollution]: {
    id: ThemeEnum.Pollution,
    label: 'Pollution',
    image: 'pollution.jpg'
  },
  [ThemeEnum.Sea]: {
    id: ThemeEnum.Sea,
    label: 'Milieu aquatique',
    image: 'sea.jpg'
  },
  [ThemeEnum.Wind]: {
    id: ThemeEnum.Wind,
    label: 'Vents',
    image: 'windmill.png'
  }
};
