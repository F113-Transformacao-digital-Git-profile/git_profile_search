import classes from "./CommonMistakes.module.css";
import { FiXCircle, FiCheckCircle } from "react-icons/fi";

const CommonMistakes = () => {
  const mistakes = [
    {
      bad: "Nomes de repositórios vagos ou genéricos",
      badExample: '"projeto-final", "teste-1", "minha-api"',
      problem: "Dificulta a identificação rápida do propósito do projeto para recrutadores e colaboradores.",
      good: "Nomes descritivos e padronizados",
      goodExample: '"sales-insights-dashboard", "finance-tracker-api", "github-profile-explorer"',
    },
    {
      bad: "Ausência de README ou documentação pobre",
      badExample: "Repositório vazio contendo apenas os arquivos de código bruto sem contexto.",
      problem: "Deixa o visitante sem saber o que o software faz, como executá-lo ou quais desafios ele resolve.",
      good: "README.md detalhado e bem estruturado",
      goodExample: "Inclua uma descrição objetiva, guia de instalação, tecnologias utilizadas e prints/GIFs demonstrativos.",
    },
    {
      bad: "Histórico com mensagens de commit vagas",
      badExample: '"fix", "update", "ajustes", "corrigindo bug"',
      problem: "Compromete o rastreamento do histórico de desenvolvimento e dificulta a colaboração em equipe.",
      good: "Adoção de Conventional Commits",
      goodExample: '"feat: add user authentication", "fix: resolve memory leak in dashboard", "docs: update install guide"',
    },
    {
      bad: "Mistura de exercícios simples e projetos reais",
      badExample: "Exibir dezenas de mini-tutoriais e testes rápidos no feed principal de destaque.",
      problem: "Gera poluição visual e pode camuflar seus projetos mais complexos e significativos.",
      good: "Curadoria com repositórios fixados (Pinned)",
      goodExample: "Selecione até 6 projetos de alto nível e organize pequenos estudos/exercícios em repositórios unificados.",
    },
    {
      bad: "Manter repositórios antigos e desatualizados",
      badExample: "Projetos antigos com bugs aparentes ou dependências vulneráveis expostas no topo.",
      problem: "Sinaliza desleixo ou falta de cuidado contínuo com a qualidade técnica das suas entregas.",
      good: "Arquivamento e curadoria de projetos",
      goodExample: "Arquive projetos finalizados que não pretende atualizar e indique explicitamente o status no README.",
    },
    {
      bad: "Ausência de colaboração em projetos externos",
      badExample: "Gráfico de contribuições contendo apenas Commits em repositórios próprios.",
      problem: "Deixa de demonstrar habilidades essenciais de trabalho em equipe, code review e colaboração remota.",
      good: "Contribuição ativa em ecossistemas Open Source",
      goodExample: "Comece corrigindo erros de digitação em documentações, criando testes ou resolvendo issues catalogadas como 'good first issue'.",
    },
  ];

  return (
    <section className={classes.common_mistakes}>
      <div className={classes.container}>
        <h2>Armadilhas do GitHub e Como Evitar</h2>
        <p className={classes.subtitle}>Evite erros comuns e adote boas práticas recomendadas por especialistas.</p>

        <div className={classes.mistakes_grid}>
          {mistakes.map((mistake, index) => (
            <div key={index} className={classes.mistake_card}>
              <div className={classes.mistake_header}>
                <FiXCircle className={classes.error_icon} />
                <h3>{mistake.bad}</h3>
              </div>
              <div className={classes.mistake_section}>
                <p className={classes.bad_example}>Exemplo: {mistake.badExample}</p>
                <p className={classes.problem}>{mistake.problem}</p>
              </div>

              <div className={classes.solution_header}>
                <FiCheckCircle className={classes.success_icon} />
                <h4>{mistake.good}</h4>
              </div>
              <div className={classes.solution_section}>
                <p className={classes.good_example}>{mistake.goodExample}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonMistakes;
