// Importando o tipo UserProps do arquivo de tipos
import { UserProps } from "../types/user";

// Importando o ícone MdLocationPin do pacote react-icons
import { MdLocationPin } from "react-icons/md";

// Importando o componente Link do pacote react-router-dom para navegação
import { Link } from "react-router-dom";

// Importando os estilos CSS do módulo User.module.css
import classes from "./User.module.css";

// Definindo o componente funcional User que recebe as props do tipo UserProps
const User = ({
  login, // Nome de usuário
  name, // Nome público do usuário
  avatar_url, // URL do avatar do usuário
  bio, // Bio do usuário
  html_url, // URL do perfil no GitHub
  followers, // Número de seguidores
  following, // Número de pessoas que o usuário está seguindo
  public_repos, // Número de repositórios públicos
  location, // Localização do usuário
}: UserProps) => {
  const displayName = name ?? login;

  return (
    <div className={classes.user}>
      <div className={classes.user_header}>
        {/* Imagem do avatar do usuário */}
        <img src={avatar_url} alt={login} />
        <div className={classes.user_titles}>
          {/* Nome de usuário */}
          <h2>{displayName}</h2>
          <p className={classes.handle}>@{login}</p>
        </div>
      </div>

      {bio && <p className={classes.bio}>{bio}</p>}

      {/* Localização do usuário, renderizada apenas se estiver definida */}
      {location && (
        <p className={classes.location}>
          <MdLocationPin /> {/* Ícone de localização */}
          <span>{location}</span>
        </p>
      )}

      {/* Div que contém as informações de seguidores e seguindo */}
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
        <div>
          <p>Repos:</p>
          <p className={classes.number}>{public_repos}</p>
        </div>
      </div>

      <div className={classes.links}>
        <a className={classes.primary_link} href={html_url} target="_blank" rel="noreferrer">
          Ver perfil no GitHub
        </a>
        {/* Link para ver os melhores projetos do usuário */}
        <Link className={classes.secondary_link} to={`/repos/${login}`}>
          Ver melhores projetos
        </Link>
      </div>
    </div>
  );
};

// Exportando o componente User para ser usado em outros lugares da aplicação
export default User;
