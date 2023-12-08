import { useEffect, useRef, useState } from 'react';
import Quizz from '../quizz/Quizz';
import './Dashboard.scss';
import Header from './header/Header';
import Menu from './menu/Menu';
import UserSection from './user/UserSection';
import { Theme } from '../../models/themes/Theme';
import { storageService } from '../../services/StorageService';
import { Trophy, easterEggs } from '../../models/trophies/Trophy';
import { TrophyEnum } from '../../models/trophies/TrophyEnum';
import EasterEgg from '../egg/EasterEgg';
import { User } from '../../models/user/User';
import { Modal } from 'antd';
import LandingPage from '../landing/LandingPage';

export default function Dashboard() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [trophy, setTrophy] = useState<Trophy | null>(null);
  const [user, setUser] = useState<User>(storageService.getData());
  const [modal, contextHolder] = Modal.useModal();
  const [displayLanding, setDisplayLanding] = useState<boolean>(false);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [chars, setChars] = useState<string>('');

  useEffect(() => {
    if (dashboardRef.current) {
      dashboardRef.current.focus();
    }
  }, []);

  function onKeyDown(key: string) {
    const goal = 'GREENQUEST';
    const newChars = chars + key;
    const formattedChars = newChars.trim().replace(' ', '').toUpperCase();
    setChars(goal.includes(formattedChars) ? newChars : '');

    console.log(key);
    if (formattedChars === goal) {
      displayEasterEgg(TrophyEnum.Santa);
    }
  }

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
    dashboardRef.current?.focus();
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
      modal
        .success({
          title: 'Félicitations',
          content: 'Vous avez répondu correctement à toutes les questions !',
          centered: true
        })
        .then(
          () => {
            const quizzProgression =
              ((Number(updatedUser.quizzes.energy) +
                Number(updatedUser.quizzes.forest) +
                Number(updatedUser.quizzes.pollution) +
                Number(updatedUser.quizzes.sea) +
                Number(updatedUser.quizzes.wind)) *
                100) /
              5;

            if (quizzProgression === 100) {
              displayEasterEgg(TrophyEnum.Trooper);
            }
          },
          () => {}
        );
    } else {
      setTheme(null);
      modal.error({ title: 'Raté...', content: 'Essaie encore !', centered: true });
    }
  }

  function displayEasterEgg(trophy: TrophyEnum) {
    setTrophy(easterEggs[trophy]);
  }

  function handleDisplayLanding() {
    setDisplayLanding(true);
  }

  return !displayLanding ? (
    dashboardRef.current?.focus() || (
      <div
        className="dashboard"
        ref={dashboardRef}
        tabIndex={0}
        onKeyDown={(e) => onKeyDown(e.key)}
      >
        <Header
          onDisplayLanding={handleDisplayLanding}
          onLeafClick={() => displayEasterEgg(TrophyEnum.Palm)}
        />
        <div className="dashboard__content">
          <Menu onItemClick={handleMenuItemClick} />
          <UserSection
            user={user}
            onProfilePictureChange={updateProfilePictureIndex}
            onCharlieClick={() => displayEasterEgg(TrophyEnum.Charlie)}
          />
        </div>
        {theme && (
          <Quizz theme={theme} onClose={() => setTheme(null)} onConfirm={handleConfirmClick} />
        )}
        {trophy && <EasterEgg trophy={trophy} onClose={handleEasterEggClose} />}
        {contextHolder}
      </div>
    )
  ) : (
    <LandingPage
      onClose={() => {
        setDisplayLanding(false);
        displayEasterEgg(TrophyEnum.Earth);
      }}
    />
  );
}
