// Importando o componente Outlet do React Router Dom para renderizar o componente principal da aplicação
import { Link, Outlet, useLocation } from "react-router-dom";

// Importando o arquivo de estilos App.css
import classes from "./App.module.css";

function App() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      {/* Navbar da aplicação */}
      <nav className={classes.navbar}>
        <div className={classes.navbar_content}>
          <h1 className={classes.logo}>
            <Link className={classes.logoLink} to="/">
              Git Profile Search
            </Link>
          </h1>
        </div>
      </nav>

      {/* Conteúdo principal da aplicação */}
      <div className={`${classes.app} ${isLanding ? classes.app_landing : ""}`}>
        {/* Outlet é um placeholder para o conteúdo das rotas definidas no React Router */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
