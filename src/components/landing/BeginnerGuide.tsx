import classes from "./BeginnerGuide.module.css";

const BeginnerGuide = () => {
  const steps = [
    {
      title: "Configure Seu Perfil",
      icon: "01",
      items: [
        "Adicione foto profissional",
        "Complete seu perfil (nome, bio, localização)",
        "Adicione website ou blog (se tiver)",
        "Configure GitHub como público",
      ],
      tip: "Seu perfil é sua primeira impressão. Dedique 30 minutos.",
    },
    {
      title: "Crie Seu Primeiro Repositório",
      icon: "02",
      items: [
        "Nome claro: 'my-portfolio', 'todo-app', 'weather-project'",
        "Descrição clara do projeto",
        "Marque como 'Public'",
        "Inicialize com README.md",
      ],
      tip: "Todo repositório deve explicar o que é e como usar.",
    },
    {
      title: "Faça Seu Primeiro Commit",
      icon: "03",
      items: [
        "git commit -m 'feat: adicionar página inicial'",
        "Commits semânticos mostram profissionalismo",
        "Escreva como se outra pessoa lesse",
        "Mensagem = história do código",
      ],
      tip: "Commit bem escrito é tão importante quanto o código.",
    },
    {
      title: "Mantenha Contribuições Regulares",
      icon: "04",
      items: [
        "1 commit por dia = 365 commits/ano",
        "Estude, experimente, documente",
        "Seu gráfico de contribuições fala volumes",
        "Consistência bate intensidade",
      ],
      tip: "Comece pequeno. Crie o hábito de contribuir diariamente.",
    },
    {
      title: "Compartilhe Seu Aprendizado",
      icon: "05",
      items: [
        "Crie repositório 'learning' ou 'estudos'",
        "Adicione código com exemplos e explicações",
        "Escreva comentários claros",
        "Mostrou que você aprende ativamente",
      ],
      tip: "Documentar para ensinar fortifica seu conhecimento.",
    },
  ];

  return (
    <section className={classes.beginner_guide}>
      <div className={classes.container}>
        <h2>Seu Primeiro GitHub: Passo a Passo</h2>
        <p className={classes.intro}>Nunca tocou em Git? Sem problema. Aqui está o caminho do zero.</p>

        <div className={classes.steps_grid}>
          {steps.map((step, index) => (
            <div key={index} className={classes.guide_card}>
              <div className={classes.card_icon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <ul className={classes.items_list}>
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
              <div className={classes.tip}>
                <strong>Dica:</strong> {step.tip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeginnerGuide;
