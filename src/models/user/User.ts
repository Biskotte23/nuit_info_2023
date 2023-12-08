import { ThemeEnum } from '../themes/ThemeEnum';
import { TrophyEnum } from '../trophies/TrophyEnum';

export interface User {
  profilePictureIndex: number | null;
  trophies: {
    [TrophyEnum.Charlie]: boolean;
    [TrophyEnum.Earth]: boolean;
    [TrophyEnum.Lion]: boolean;
    [TrophyEnum.Palm]: boolean;
    [TrophyEnum.Santa]: boolean;
    [TrophyEnum.Trooper]: boolean;
  };
  quizzes: {
    [ThemeEnum.Energy]: boolean;
    [ThemeEnum.Forest]: boolean;
    [ThemeEnum.Pollution]: boolean;
    [ThemeEnum.Sea]: boolean;
    [ThemeEnum.Wind]: boolean;
  };
}
