import { NavLink } from "react-router-dom";
import "../styles/Banner.css";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import LogementTitre from "../components/LogementTitre";
import LogementProprietaire from "../components/LogementProprietaire";
import SectionInformations from "../components/SectionInformations";
import "../styles/FicheLogement.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FicheLogement() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);
  /* console.log("l'id est:", location.state.appartementId);*/
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/ListeLogement.json")
      .then((response) => response.json())
      .then((responses) => {
        const data = responses.find((response) => response.id === id);
        setData(data);
        console.log("data:", data);
      })
      .catch(console.error);
  }, [id]);

  if (data === undefined) {
    navigate("/Error");
    return null;
  }
  return (
    <>
      <div className="banner">
        <div className="image_banner">
          <NavLink to={`/`}>
            <img className="banner_logo" src="/logo.jpg" alt="logo" />
          </NavLink>
        </div>

        <div className="lien_banner">
          <NavLink to={`/`}>Accueil</NavLink>

          <span className="separation-liens"></span>

          <NavLink to={`/Apropos`}>A propos</NavLink>
        </div>
      </div>
      <div className="ficheLogementTotal">
        <div className="imageLogement">
          {data && <Gallery pictures={data.pictures} />}
        </div>

        <div className="titreLogement">
          {data && (
            <LogementTitre
              title={data.title}
              location={data.location}
              tag={data.tags}
            />
          )}

          {data && (
            <LogementProprietaire rating={data.rating} host={data.host} />
          )}
        </div>

        <div className="descriptionLogement">
          {data && (
            <SectionInformations
              title="Description"
              content={data.description}
            />
          )}

          {data && (
            <SectionInformations
              title="Equipements"
              content={data.equipments.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FicheLogement;
