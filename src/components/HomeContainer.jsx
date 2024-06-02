import "../styles/HomeContainer.css";
import HomeItem from "./HomeItem";
import { useState, useEffect } from "react";
/**
 *
 * @returns {JSX} : Composant affichant la liste des logements sur la page d'accueil.
 *
*/
function HomeContainer() {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    fetch("ListeLogement.json")
      .then((response) => response.json())
      .then((response) => setAppartements(response))
      .catch(console.error);
  }, []);

  return (
    <div className="containerLogement">
      {appartements.map((appartement) => (
        <HomeItem
          key={appartement.id}
          title={appartement.title}
          cover={appartement.cover}
          id={appartement.id}
        />
      ))}
    </div>
  );
}
export default HomeContainer;