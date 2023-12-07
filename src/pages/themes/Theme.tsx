import './Theme.scss';
import energyImg from '../../assets/images/energy-image.png';
import forestImg from '../../assets/images/forest-image.png';
import seaImg from '../../assets/images/sea-image.png';
import wildlifeImg from '../../assets/images/wildlife-image.png';
import wasteImg from '../../assets/images/wasteland-image.png';

export default function Theme() {
  return (
    <div>
      <div className="theme">
        <div className="themeContainer">
          <div className="quizContainer theme-1">
            <img src={seaImg} alt="a sea image" />

            <div className="title sea-theme">
              <span>sea Theme</span>
            </div>
          </div>
          <div className="quizContainer theme-2">
            <img src={forestImg} alt="a forest image" />

            <div className="title forest-name">
              <span>forest Theme</span>
            </div>
          </div>
          <div className="quizContainer">
            <img src={wasteImg} alt="a waste image" />

            <div className="title waste theme">
              <span>waste Theme</span>
            </div>
          </div>
          <div className="quizContainer theme">
            <img src={wildlifeImg} alt="a wildlife image" />

            <div className="title wildlife theme">
              <span>waste Theme</span>
            </div>
          </div>
          <div className="quizContainer theme">
            <img src={energyImg} alt="an energy image" />
            <div className="title energy theme">
              <span>energy Theme</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
