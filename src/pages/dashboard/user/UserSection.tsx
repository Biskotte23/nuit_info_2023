import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserSection.scss';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';
import Trophy from './Trophy';
import Container from './Container';
import { useState } from 'react';

interface EasterEggsProps {
  path: string;
  enable: boolean;
}

interface UserSectionProps {
  currentProfilePictureIndex: number;
  onProfilePictureChange: (index: number) => void;
}

function EasterEggs({ easterEggs }: { easterEggs: EasterEggsProps[][] }) {
  return easterEggs.map((row) => (
    <div className="trophy-container__row">
      {row.map((easterEgg) => (
        <Trophy
          image={`/assets/images/easter_eggs/icons/${easterEgg.path}`}
          label="Random"
          isGetted={easterEgg.enable}
        />
      ))}
    </div>
  ));
}

export default function UserSection({
  currentProfilePictureIndex,
  onProfilePictureChange
}: UserSectionProps) {
  const [profilePictureIndex, setProfilePictureIndex] = useState<number>(
    currentProfilePictureIndex
  );
  const profilePicturesNumber = 9;
  const easterEggs: EasterEggsProps[][] = [
    [
      { path: 'lion.jpg', enable: false },
      { path: 'santa.jpg', enable: false },
      { path: 'earth.jpg', enable: true }
    ],
    [
      { path: 'trooper.png', enable: true },
      { path: 'palm.jpg', enable: false },
      { path: 'charlie.png', enable: false }
    ]
  ];

  function getProfilePicturePath() {
    return `/assets/images/profiles/profile-${profilePictureIndex}.jpg`;
  }

  function changeProfilePicture() {
    setProfilePictureIndex((profilePictureIndex + 1) % profilePicturesNumber);

    onProfilePictureChange(profilePictureIndex);
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
          <ProgressBar label="Défis" progression={60} color="#00d0ff" />
          <ProgressBar label="Trophées" progression={15} color="#2edd22" />
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
