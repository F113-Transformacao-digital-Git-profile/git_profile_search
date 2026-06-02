// Define o tipo UserProps
export type UserProps = {
    avatar_url: string; // URL do avatar do usuário
    login: string; // Nome de usuário
    name: string | null; // Nome público do usuário
    bio: string | null; // Bio do usuário
    html_url: string; // URL do perfil no GitHub
    location: string | null; // Localização do usuário
    followers: number; // Número de seguidores
    following: number; // Número de pessoas que o usuário está seguindo
    public_repos: number; // Número de repositórios públicos
  };
  
