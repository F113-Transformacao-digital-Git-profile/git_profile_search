import classes from "./Hero.module.css";
import { BsArrowRight } from "react-icons/bs";

interface HeroProps {
  onExplore: () => void;
}

const Hero = ({ onExplore }: HeroProps) => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero_content}>
        <h1 className={classes.title}>Descubra o Poder do Seu GitHub</h1>
        <p className={classes.subtitle}>
          Transforme seu perfil em um portfólio profissional e aprenda as melhores práticas
          para se destacar no mundo do desenvolvimento
        </p>
        <p className={classes.description}>
          Explore perfis de desenvolvedores, entenda o que faz um GitHub extraordinário e
          construa uma presença digital que abra portas. Tudo isso através de análises,
          comparações e orientações práticas.
        </p>
        <button className={classes.cta_button} onClick={onExplore}>
          <span>Comece a explorar agora</span>
          <BsArrowRight />
        </button>
      </div>
      <div className={classes.hero_background}></div>
    </section>
  );
};

export default Hero;