import "../styles/LogementProprietaire.css";

/**
 *
 * @returns {JSX} : Composant qui affiche les détails du propriétaire du logement: nom et notation.
 *
 */

function FicheLogementProprietaire(props) {
  const name = props.host.name;
  const [firstName, lastName] = name.split(" ");

  const namePicture = props.host.picture;
  return (
    <div className="ficheLogementContainer">
      <div className="ficheLogementProprietaire">
        <h3>
          {" "}
          <span>{firstName}</span>
          <span>{lastName} </span>{" "}
        </h3>
        <img
          className="imgProprietaire"
          src={namePicture}
          alt="imgProprietaire"
        />
      </div>

      <div className="noteProprietaire">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            className={props.rating >= num ? "note_active" : "note_off"}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default FicheLogementProprietaire;
