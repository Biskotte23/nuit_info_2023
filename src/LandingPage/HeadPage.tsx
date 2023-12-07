import Typewriter from 'typewriter-effect';
import './HeadPage.scss';

export default function HeadPage() {
  return (
    <div className="landingPage">
      <Typewriter
        options={{
          autoStart: true,
          delay: 10 //40
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`Bienvenue, explorateur, dans  \n`)
            .pauseFor(1000)
            // .changeDelay(80)
            .typeString(
              `<span class="span project-title">"La Quête Écologique de l'Explorateur Vert"</span>🌿`
            )
            .pauseFor(200)
            .changeDelay(10)
            .typeString(
              `<span class="span welcome-text">Préparez-vous pour une aventure où vos choix sculpteront le destin de la planète.</span>`
            )
            .pauseFor(200)
            .typeString(
              `Laissez la magie de la nature guider vos décisions à travers des défis captivants et remportez des récompenses méritées. <span class="span final-text">L'aventure commence maintenant !</span>`
            )
            .typeString(
              `<span ref={isTyping} class="span final-text">Prêt à être l'Explorateur Vert ? 🌍✨</span>`
            )
            .start();
        }}
      />
      {/* <p className="quiz active">{content}</p> */}
    </div>
  );
}
