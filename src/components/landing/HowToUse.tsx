import classes from "./HowToUse.module.css";
import { MdSearch, MdAnalytics, MdLightbulb, MdSchool, MdCompare } from "react-icons/md";

const HowToUse = () => {
  const steps = [
    {
      icon: <MdSearch />,
      number: "1",
      title: "Busque e Explore",
      description:
        "Digite o nome de um desenvolvedor e explore seu perfil. Veja como está estruturado, analise seus repositórios e estude suas práticas.",
    },
    {
      icon: <MdAnalytics />,
      number: "2",
      title: "Obtenha Análise Detalhada",
      description:
        "Nossa plataforma analisa e mostra completude do perfil, qualidade dos repositórios, padrões de contribuição e impacto.",
    },
    {
      icon: <MdLightbulb />,
      number: "3",
      title: "Receba Recomendações",
      description:
        "Baseado na análise, receba orientações específicas e acionáveis para melhorar seu perfil e seu GitHub.",
    },
    {
      icon: <MdSchool />,
      number: "4",
      title: "Aprenda com Exemplos",
      description:
        "Acesse perfis exemplares categorizados por experiência e estude padrões reais de profissionais.",
    },
    {
      icon: <MdCompare />,
      number: "5",
      title: "Compare e Melhore",
      description:
        "Compare dois perfis lado a lado, entenda diferenças e aplique o melhor de ambos em seu GitHub.",
    },
  ];

  return (
    <section className={classes.how_to_use}>
      <div className={classes.container}>
        <h2>Como Explorar e Aprender</h2>
        <p className={classes.subtitle}>Guia prático para maximizar seu GitHub</p>

        <div className={classes.steps_container}>
          {steps.map((step, index) => (
            <div key={index} className={classes.step}>
              <div className={classes.step_icon}>{step.icon}</div>
              <div className={classes.step_content}>
                <h3>
                  <span className={classes.step_number}>{step.number}</span>
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
