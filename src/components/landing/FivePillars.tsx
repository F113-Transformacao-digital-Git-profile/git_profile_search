import classes from "./FivePillars.module.css";
import {
  MdCheckCircle,
  MdCode,
  MdDocumentScanner,
  MdTrendingUp,
  MdStar,
} from "react-icons/md";

const FivePillars = () => {
  const pillars = [
    {
      icon: <MdCheckCircle />,
      number: "1",
      title: "Perfil Bem Estruturado",
      items: [
        "Foto nítida e profissional",
        "Bio descritiva com especialidade",
        "Localização e website",
        "Disponibilidade para trabalho",
      ],
    },
    {
      icon: <MdCode />,
      number: "2",
      title: "Repositórios com Propósito",
      items: [
        "Nomes descritivos e claros",
        "README completo e detalhado",
        "Estrutura organizada",
        "Topics/tags para descoberta",
      ],
    },
    {
      icon: <MdDocumentScanner />,
      number: "3",
      title: "Commits Semânticos",
      items: [
        "feat: nova funcionalidade",
        "fix: correção de bug",
        "docs: documentação",
        "Histórico claro e profissional",
      ],
    },
    {
      icon: <MdTrendingUp />,
      number: "4",
      title: "Contribuições Ativas",
      items: [
        "Contribuições regulares",
        "Padrão consistente",
        "Open source colaborativo",
        "Gráfico de contribuição forte",
      ],
    },
    {
      icon: <MdStar />,
      number: "5",
      title: "Impacto e Reconhecimento",
      items: [
        "Repositórios com stars",
        "Forks que demonstram valor",
        "Issues e PRs de colaboração",
        "Diversidade de linguagens",
      ],
    },
  ];

  return (
    <section className={classes.five_pillars}>
      <div className={classes.container}>
        <h2>Os 5 Pilares de um GitHub Excelente</h2>
        <p className={classes.subtitle}>Descubra o que recrutadores e colegas procuram</p>

        <div className={classes.pillars_grid}>
          {pillars.map((pillar, index) => (
            <div key={index} className={classes.pillar_card}>
              <div className={classes.pillar_header}>
                <div className={classes.pillar_icon}>{pillar.icon}</div>
                <span className={classes.pillar_number}>{pillar.number}</span>
              </div>
              <h3>{pillar.title}</h3>
              <ul>
                {pillar.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FivePillars;
