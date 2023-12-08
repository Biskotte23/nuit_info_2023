import { ThemeEnum } from '../models/themes/ThemeEnum';
import { TrophyEnum } from '../models/trophies/TrophyEnum';
import { User } from '../models/user/User';

class StorageService {
  private key = 'user';

  public saveData(data: User) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  public getData(): User {
    const data = localStorage.getItem(this.key);
    return data
      ? JSON.parse(data)
      : {
          profilePictureIndex: 0,
          trophies: {
            [TrophyEnum.Charlie]: false,
            [TrophyEnum.Earth]: false,
            [TrophyEnum.Lion]: false,
            [TrophyEnum.Palm]: false,
            [TrophyEnum.Santa]: false,
            [TrophyEnum.Trooper]: false
          },
          quizzes: {
            [ThemeEnum.Energy]: false,
            [ThemeEnum.Forest]: false,
            [ThemeEnum.Pollution]: false,
            [ThemeEnum.Sea]: false,
            [ThemeEnum.Wind]: false
          }
        };
  }
}

export const storageService = new StorageService();
