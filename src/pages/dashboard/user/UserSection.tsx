import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserSection.scss';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';
import Trophy from './Trophy';
import Container from './Container';
import { useState } from 'react';

interface UserSectionProps {
  currentProfilePictureIndex: number;
  onProfilePictureChange: (index: number) => void;
}

export default function UserSection({
  currentProfilePictureIndex,
  onProfilePictureChange
}: UserSectionProps) {
  const [profilePictureIndex, setProfilePictureIndex] = useState<number>(
    currentProfilePictureIndex
  );
  const profilePicturesNumber = 9;

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
          <ProgressBar label="Défis" progression={60} color="red" />
          <ProgressBar label="Trophées" progression={15} color="blue" />
        </div>
      </Container>
      <Container label="Trophées cachés">
        <div className="trophy-container user-section__container">
          <div className="trophy-container__row">
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
          </div>
          <div className="trophy-container__row">
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
          </div>
          <div className="trophy-container__row">
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
          </div>
          <div className="trophy-container__row">
            <Trophy
              image="http://mariokart.france.free.fr/objet/champidor.jpg"
              label="Random"
              isGetted={false}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
