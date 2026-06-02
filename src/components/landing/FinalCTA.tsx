import classes from "./FinalCTA.module.css";
import { BsArrowRight } from "react-icons/bs";

interface FinalCTAProps {
  onExplore: () => void;
}

const FinalCTA = ({ onExplore }: FinalCTAProps) => {
  return (
    <section className={classes.final_cta}>
      <div className={classes.container}>
        <h2 className={classes.title}>Pronto para Transformar Seu GitHub?</h2>
        <p className={classes.description}>
          Seu GitHub é seu portfólio vivo, uma vitrine profissional que fala por você. 
          Explore perfis de destaque, domine boas práticas e posicione-se para as melhores oportunidades do mercado.
        </p>
        <p></p>
        <button className={classes.main_button} onClick={onExplore}>
          <span>Começar a explorar perfis</span>
          <BsArrowRight className={classes.arrow_icon} />
        </button>
        <footer className={classes.footer}>
          <p className={classes.footer_branding}>
            © 2026 Git Profile Search • Impulsionando sua carreira dev
          </p>
        </footer>
      </div>
    </section>
  );
};

export default FinalCTA;
