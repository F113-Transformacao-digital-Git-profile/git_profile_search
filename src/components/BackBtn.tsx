// Importa os estilos do arquivo CSS BackBtn.module.css
import classes from "./BackBtn.module.css";

// Importa o hook useNavigate do react-router-dom para navegação
import { useNavigate, useParams } from "react-router-dom";

type BackBtnProps = {
  fallbackTo?: string;
};

// Define o componente funcional BackBtn
const BackBtn = ({ fallbackTo }: BackBtnProps) => {
  // Usa o hook useNavigate para obter a função de navegação
  const navigate = useNavigate();
  const { username } = useParams();

  const handleBack = () => {
    if (fallbackTo) {
      navigate(fallbackTo);
      return;
    }

    if (username) {
      navigate(`/?user=${encodeURIComponent(username)}`);
      return;
    }

    navigate(-1);
  };

  return (
    <>
      {/* Renderiza um botão com estilo e funcionalidade de navegação */}
      <button className={classes.back_btn} onClick={handleBack}>
        Voltar {/* Texto do botão */}
      </button>
    </>
  );
};

// Exporta o componente BackBtn como padrão
export default BackBtn;
