import "../styles/Banner.css";
import { NavLink } from "react-router-dom";
/**
 *
 * @returns {JSX} : Composant affichant la bannière du site : Logo et liens "Accueil" et "A propos".
 *
 */

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="image_banner">
          {" "}
          <NavLink to={`/`}>
            <img className="banner_logo" src="logo.jpg" alt="logo" />
          </NavLink>
        </div>
        <div className="lien_banner">
          <NavLink to={`/`}>Accueil</NavLink>
          <span className="separation-liens"></span>
          <NavLink to={`/Apropos`}>A propos</NavLink>
        </div>
      </div>
      <div className="divImgBanner">
        <img className="imgBanner" src="Image_source_1.jpg" alt="imgBanner" />
        <h1 className="titleImgBanner">
          <span className="spanBanner">Chez vous,</span> partout et ailleurs
        </h1>
      </div>
    </>
  );
}

export default Banner;