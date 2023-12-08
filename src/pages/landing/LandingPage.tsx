import Typewriter from 'typewriter-effect';
import './LandingPage.scss';
import { useRef, useEffect } from 'react';

interface LandingPageProps {
  onClose: () => void;
}

export default function LandingPage({ onClose }: LandingPageProps) {
  const landingPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (landingPageRef.current) {
      landingPageRef.current.focus();
    }
  }, []);

  function onKeyDown(key: string) {
    if (key === 'Enter') {
      onClose();
    }
  }

  return (
    <div
      className="landingPage"
      onKeyDown={(e) => onKeyDown(e.key)}
      tabIndex={0}
      ref={landingPageRef}
    >
      <Typewriter
        options={{
          autoStart: true,
          delay: 10 //40
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`Bienvenue, explorateur, dans  \n`)
            .pauseFor(1000)
            .typeString(
              `<span class="span project-title">"La Quête Écologique de l'Explorateur Vert" 🌿</span>`
            )
            .pauseFor(200)
            .changeDelay(10)
            .typeString(
              `<span class="span welcome-text">Préparez-vous pour une aventure où vos choix sculpteront le destin de la planète.</span>`
            )
            .pauseFor(200)
            .typeString(
              `<span class="span">Laissez la magie de la nature guider vos décisions à travers des défis captivants et remportez des récompenses méritées.</span>`
            )
            .typeString(`<span class="span final-text">L'aventure commence maintenant !</span>`)
            .typeString(
              `<span ref={isTyping} class="span final-text">Prêt à être l'Explorateur Vert ? 🌍✨</span>`
            )
            .start();
        }}
      />
    </div>
  );
}
