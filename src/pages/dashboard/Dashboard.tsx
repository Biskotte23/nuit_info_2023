import { useState } from 'react';
import Quizz from '../quizz/Quizz';
import './Dashboard.scss';
import Header from './header/Header';
import Menu from './menu/Menu';
import UserProfile from './user/UserSection';
import { Theme } from '../../models/themes/Theme';
import { storageService } from '../../services/StorageService';

export default function Dashboard() {
  const [theme, setTheme] = useState<Theme | null>(null);

  function updateProfilePictureIndex(index: number) {
    user.profilePictureIndex = index;
    storageService.saveData(user);
  }

  function handleMenuItemClick(t: Theme) {
    setTheme(t);
  }

  const user = storageService.getData();

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__content">
        <Menu onItemClick={handleMenuItemClick} />
        <UserProfile user={user} onProfilePictureChange={updateProfilePictureIndex} />
      </div>
      {theme && <Quizz theme={theme} onClose={() => setTheme(null)} />}
    </div>
  );
}
