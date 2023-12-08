import { useState } from 'react';
import Quizz from '../quizz/Quizz';
import './Dashboard.scss';
import Header from './header/Header';
import Menu from './menu/Menu';
import UserProfile from './user/UserSection';
import { Theme } from '../../models/themes/Theme';
import { storageService } from '../../services/StorageService';
import { Trophy } from '../../models/trophies/Trophy';
import { TrophyEnum } from '../../models/trophies/TrophyEnum';
import EasterEgg from '../egg/EasterEgg';
import { User } from '../../models/user/User';

export default function Dashboard() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [trophy, setTrophy] = useState<Trophy | null>(null);
  const [user, setUser] = useState<User>(storageService.getData());

  function updateProfilePictureIndex(index: number) {
    const updatedUser = {
      ...user,
      profilePictureIndex: index
    };
    setUser(updatedUser);
    storageService.saveData(updatedUser);
  }

  function handleMenuItemClick(t: Theme) {
    setTheme(t);
  }

  function handleEasterEggClose(trophy: TrophyEnum) {
    const updatedUser = {
      ...user,
      trophies: {
        ...user.trophies,
        [trophy]: true
      }
    };
    setUser(updatedUser);
    storageService.saveData(updatedUser);
    setTrophy(null);
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__content">
        <Menu onItemClick={handleMenuItemClick} />
        <UserProfile user={user} onProfilePictureChange={updateProfilePictureIndex} />
      </div>
      {theme && <Quizz theme={theme} onClose={() => setTheme(null)} />}
      {trophy && <EasterEgg trophy={trophy} onClose={handleEasterEggClose} />}
    </div>
  );
}
