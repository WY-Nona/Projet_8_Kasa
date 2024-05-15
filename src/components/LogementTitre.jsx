import "../styles/LogementTitre.css";
/**
 *
 * @returns {JSX} : Composant qui affiche les titres, sous-titres ainsi que les tags des logements.
 *
*/

function ficheLogementTitre(props) {
  return (
    <div className="ficheLogementTitre">
      <h1>{props.title}</h1>
      <h2>{props.location}</h2>
      <>
        <div className="ficheLogementTags">
          {" "}
          {props.tag.map((tag) => (
            <span className="ficheLogementTag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </>
    </div>
  );
}

export default ficheLogementTitre;