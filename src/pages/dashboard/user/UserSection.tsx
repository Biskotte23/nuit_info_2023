import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserSection.scss';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';
import Trophy from './Trophy';
import Container from './Container';

export default function UserSection() {
  return (
    <div className="user-section">
      <div className="profile-picture">
        <div className="profile-picture-container">
          <img
            className="profile-picture-container__image"
            src="https://passion-stickers.com/4409-large_default/stickers-mario-tete.jpg"
            alt="Image de profil du joueur"
          />
        </div>
        <button className="profile-picture__edit-button">
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
