import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserSection.scss';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';
import Trophy from './Trophy';
import Container from './Container';
import { useState } from 'react';
import { User } from '../../../models/user/User';

interface EasterEggsProps {
  path: string;
  enable: boolean;
}

interface UserSectionProps {
  user: User;
  onProfilePictureChange: (index: number) => void;
}

function EasterEggs({ easterEggs }: { easterEggs: EasterEggsProps[][] }) {
  return easterEggs.map((row, index) => (
    <div key={index} className="trophy-container__row">
      {row.map((easterEgg) => (
        <Trophy
          key={easterEgg.path}
          image={`/assets/images/easter_eggs/icons/${easterEgg.path}`}
          label="Random"
          isGetted={easterEgg.enable}
        />
      ))}
    </div>
  ));
}

export default function UserSection({ user, onProfilePictureChange }: UserSectionProps) {
  const [profilePictureIndex, setProfilePictureIndex] = useState<number>(
    user.profilePictureIndex ?? 0
  );
  const profilePicturesNumber = 9;
  const easterEggs: EasterEggsProps[][] = [
    [
      { path: 'lion.jpg', enable: !!user.trophies.lion },
      { path: 'santa.jpg', enable: !!user.trophies.santa },
      { path: 'earth.jpg', enable: !!user.trophies.earth }
    ],
    [
      { path: 'trooper.png', enable: !!user.trophies.trooper },
      { path: 'palm.jpg', enable: !!user.trophies.palm },
      { path: 'charlie.png', enable: !!user.trophies.charlie }
    ]
  ];

  const trophyProgression =
    ((Number(user.trophies.lion) +
      Number(user.trophies.santa) +
      Number(user.trophies.earth) +
      Number(user.trophies.trooper) +
      Number(user.trophies.palm) +
      Number(user.trophies.charlie)) *
      100) /
    6;

  const quizzProgression =
    ((Number(user.quizzes.energy) +
      Number(user.quizzes.forest) +
      Number(user.quizzes.pollution) +
      Number(user.quizzes.sea) +
      Number(user.quizzes.wind)) *
      100) /
    5;

  function getProfilePicturePath() {
    return `/assets/images/profiles/profile-${profilePictureIndex}.jpg`;
  }

  function changeProfilePicture() {
    const index = (profilePictureIndex + 1) % profilePicturesNumber;
    setProfilePictureIndex(index);
    onProfilePictureChange(index);
  }

  return (
    <div className="user-section">
      <div className="profile-picture">
        <div className="profile-picture-container">
          <img
            className="profile-picture-container__image"
            src={getProfilePicturePath()}
            alt="Image de profil du joueur"
          />
        </div>
        <button className="profile-picture__edit-button" onClick={changeProfilePicture}>
          Changer l'image <FontAwesomeIcon icon={faCamera} />
        </button>
      </div>
      <Container label="Progression">
        <div className="progression-container user-section__container">
          <ProgressBar label="Défis" progression={Math.floor(quizzProgression)} color="#00d0ff" />
          <ProgressBar
            label="Trophées"
            progression={Math.floor(trophyProgression)}
            color="#2edd22"
          />
        </div>
      </Container>
      <Container label="Trophées cachés">
        <div className="trophy-container user-section__container">
          <EasterEggs easterEggs={easterEggs} />
        </div>
      </Container>
    </div>
  );
}
