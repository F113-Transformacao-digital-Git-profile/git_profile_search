import classes from "./WhyGithubMatters.module.css";
import { MdVisibility, MdRocketLaunch, MdSchool, MdPeople } from "react-icons/md";

const WhyGithubMatters = () => {
  const cards = [
    {
      icon: <MdVisibility />,
      title: "Sua Presença Digital",
      description:
        "Seu GitHub é uma janela para suas habilidades. Empresas consultam seus repositórios para entender como você trabalha e sua qualidade de código.",
    },
    {
      icon: <MdRocketLaunch />,
      title: "Abra Portas",
      description:
        "Um perfil bem elaborado atrai ofertas de emprego, oportunidades de freelance, parcerias e visibilidade na comunidade open source.",
    },
    {
      icon: <MdSchool />,
      title: "Aprenda Vendo",
      description:
        "Explorar repositórios de outros desenvolvedores é uma forma poderosa de aprender melhores práticas, padrões e documentação eficaz.",
    },
    {
      icon: <MdPeople />,
      title: "Faça Parte da Comunidade",
      description:
        "GitHub é um espaço de colaboração global, compartilhamento de conhecimento e networking profissional que reconhece seu trabalho.",
    },
  ];

  return (
    <section className={classes.why_github}>
      <div className={classes.container}>
        <h2>Por Que Seu GitHub é Seu Melhor Portfólio?</h2>
        <p className={classes.subtitle}>Recrutadores veem seu código antes de seu currículo</p>

        <div className={classes.cards_grid}>
          {cards.map((card, index) => (
            <div key={index} className={classes.card}>
              <div className={classes.card_icon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGithubMatters;
