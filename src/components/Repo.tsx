// Importa o tipo RepoProps das definições de tipos
import { RepoProps } from "../types/repo";

// Importa ícones das bibliotecas de ícones
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"; 
import { RiGitRepositoryLine } from "react-icons/ri";

// Importa os estilos do arquivo CSS Repo.module.css
import classes from "./Repo.module.css";

// Define o componente Repo que recebe propriedades do tipo RepoProps
const Repo = ({
  name, // Nome do repositório
  description, // Descrição do repositório
  language, // Linguagem de programação usada no repositório
  html_url, // URL do repositório no GitHub
  forks_count, // Número de forks do repositório
  stargazers_count, // Número de estrelas do repositório
}: RepoProps) => {
  const descriptionText = description?.trim() || "Sem descrição disponível.";
  const languageText = language || "Sem linguagem";

  return (
    <div className={classes.repo}> {/* Contêiner principal do componente com estilo */}
      <h3>{name}</h3> {/* Exibe o nome do repositório */}
      <p className={classes.description}>{descriptionText}</p>
      <div className={classes.meta}> {/* Contêiner para as estatísticas com estilo */}
        <div className={classes.meta_item}>
          <BsCodeSlash /> {/* Ícone representando código */}
          <span>{languageText}</span> {/* Exibe a linguagem de programação */}
        </div>
        <div className={classes.meta_item}>
          <AiOutlineStar /> {/* Ícone de estrela */}
          <span>{stargazers_count}</span> {/* Exibe o número de estrelas */}
        </div>
        <div className={classes.meta_item}>
          <AiOutlineFork /> {/* Ícone de fork */}
          <span>{forks_count}</span> {/* Exibe o número de forks */}
        </div>
      </div>
      <a href={html_url} target="_blank" rel="noreferrer" className={classes.repo_btn}> {/* Link para o repositório no GitHub com estilo */}
        <span>Ver código</span> {/* Texto do link */}
        <RiGitRepositoryLine aria-label="" /> {/* Ícone de repositório */}
      </a>
    </div>
  );
};

// Exporta o componente Repo como padrão
export default Repo;
