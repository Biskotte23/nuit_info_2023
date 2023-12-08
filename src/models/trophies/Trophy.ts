import { TrophyEnum } from './TrophyEnum';

export interface Trophy {
  id: TrophyEnum;
  label: string;
  image: string;
}

export const easterEggs = {
  [TrophyEnum.Charlie]: {
    id: TrophyEnum.Charlie,
    label:
      'Si tu peux trouver Charlie, alors tu peux bien trouver une poubelle pour jeter tes déchets 😉',
    image: 'easter-egg-charlie.png'
  },
  [TrophyEnum.Earth]: {
    id: TrophyEnum.Earth,
    label: 'On compte sur toi pour prendre soin de notre belle planète bleue 💪',
    image: 'easter-egg-earth.gif'
  },
  [TrophyEnum.Lion]: {
    id: TrophyEnum.Lion,
    label: "Agir pour l'environnement, ce n'est pas si compliqué ✌️",
    image: 'easter-egg-lion.gif'
  },
  [TrophyEnum.Palm]: {
    id: TrophyEnum.Palm,
    label: "Fini de s'en battre de coconuts du réchauffement climatique 🥥",
    image: 'easter-egg-palm.gif'
  },
  [TrophyEnum.Santa]: {
    id: TrophyEnum.Santa,
    label: 'Pour Noël, au lieu de faire monter la température, enfile un pull 👕',
    image: 'easter-egg-santa.gif'
  },
  [TrophyEnum.Trooper]: {
    id: TrophyEnum.Trooper,
    label: "Quand tu réalises qu'un futur positif pour le climat est possible 🕺",
    image: 'easter-egg-trooper.gif'
  }
};
