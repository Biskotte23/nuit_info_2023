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
import { Modal } from 'antd';

export default function Dashboard() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [trophy, setTrophy] = useState<Trophy | null>(null);
  const [user, setUser] = useState<User>(storageService.getData());
  const [modal, contextHolder] = Modal.useModal();

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

  function handleConfirmClick(won: boolean) {
    if (won) {
      const updatedUser = {
        ...user,
        quizzes: {
          ...user.quizzes,
          [theme!.id]: true
        }
      };
      setUser(updatedUser);
      storageService.saveData(updatedUser);
      setTheme(null);
      modal.success({
        title: 'Félicitations',
        content: 'Vous avez répondu juste à toutes les questions !',
        centered: true
      });
    } else {
      setTheme(null);
      modal.error({ title: 'Raté...', content: 'Essaie encore !', centered: true });
    }
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__content">
        <Menu onItemClick={handleMenuItemClick} />
        <UserProfile user={user} onProfilePictureChange={updateProfilePictureIndex} />
      </div>
      {theme && (
        <Quizz theme={theme} onClose={() => setTheme(null)} onConfirm={handleConfirmClick} />
      )}
      {trophy && <EasterEgg trophy={trophy} onClose={handleEasterEggClose} />}
      {contextHolder}
    </div>
  );
}
