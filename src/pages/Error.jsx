import "../styles/Error.css";
import "../styles/Banner.css";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div>
      <div className="banner">
        <div className="image_banner">
          <NavLink to={`/`}>
            <img className="banner_logo" src="/logo.jpg" alt="logo" />
          </NavLink>
        </div>

        <div className="lien_banner">
          {" "}
          <NavLink to={`/`}>Accueil</NavLink>
          <span className="separation-liens"></span>
          <NavLink to={`/Apropos`}>A propos</NavLink>
        </div>
      </div>
      <div className="errorDivGlobal">
        <h2 className="error404">404</h2>
        <p className="errorP1">
          <span className="errorP1Span">Oups ! La page que</span> vous demandez
          n'existe pas.
        </p>
        <NavLink to={`/`} className="errorP2">
          Retourner a la page d'accueil
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}

export default Error;