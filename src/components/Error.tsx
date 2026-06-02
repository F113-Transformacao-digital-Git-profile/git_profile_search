import { FiAlertCircle } from "react-icons/fi";

import classes from "../App.module.css";

export type ErrorVariant = "not-found" | "api" | "network";

type ErrorProps = {
  variant?: ErrorVariant;
  onRetry?: () => void;
};

const ERROR_CONTENT: Record<ErrorVariant, { title: string; description: string; actionLabel: string }> = {
  "not-found": {
    title: "Usuário não encontrado",
    description: "Verifique o nome e tente novamente.",
    actionLabel: "Tentar outro usuário",
  },
  api: {
    title: "Erro na API",
    description: "Não foi possível carregar os dados do GitHub agora. Tente novamente em instantes.",
    actionLabel: "Tentar novamente",
  },
  network: {
    title: "Erro de conexão",
    description: "Confira sua conexão com a internet e tente novamente.",
    actionLabel: "Tentar novamente",
  },
};

const Error = ({ variant = "not-found", onRetry }: ErrorProps) => {
  const content = ERROR_CONTENT[variant];

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
      return;
    }

    const input = document.getElementById("search-input");
    if (input instanceof HTMLInputElement) {
      input.focus();
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.stateCard} role="alert" aria-live="polite">
      <div className={`${classes.stateIcon} ${classes.stateIconDanger}`} aria-hidden="true">
        <FiAlertCircle />
      </div>
      <h3 className={classes.stateTitle}>{content.title}</h3>
      <p className={classes.stateDescription}>{content.description}</p>
      <button type="button" className={classes.stateAction} onClick={handleRetry}>
        {content.actionLabel}
      </button>
    </div>
  );
};

export default Error;
