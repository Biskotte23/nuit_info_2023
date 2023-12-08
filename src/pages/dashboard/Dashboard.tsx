import { useState } from 'react';
import Quizz from '../quizz/Quizz';
import './Dashboard.scss';
import Header from './header/Header';
import Menu from './menu/Menu';
import UserProfile from './user/UserSection';
import { Theme } from '../../models/themes/Theme';

export default function Dashboard() {
  const [theme, setTheme] = useState<Theme | null>(null);

  function updateProfilePictureIndex(index: number) {
    console.log('New profile picture index', index);
  }

  function handleMenuItemClick(t: Theme) {
    setTheme(t);
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__content">
        <Menu onItemClick={handleMenuItemClick} />
        <UserProfile
          currentProfilePictureIndex={0}
          onProfilePictureChange={updateProfilePictureIndex}
        />
      </div>
      {theme && <Quizz theme={theme} onClose={() => setTheme(null)} />}
    </div>
  );
}
