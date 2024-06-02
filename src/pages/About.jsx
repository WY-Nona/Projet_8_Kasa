import Footer from "../components/Footer";
import "../styles/Banner.css";

import { NavLink } from "react-router-dom";
import SectionInformations from "../components/SectionInformations";

function Apropos() {
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
        <img className="imgBanner2" src="Image_source_2.jpg" alt="imgBanner" />
      </div>

      <div className="Apropos-container">
        <SectionInformations
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes."
        />
        <SectionInformations
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <SectionInformations
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <SectionInformations
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </>
  );
}

export default Apropos;