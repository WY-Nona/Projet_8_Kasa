import { useState } from "react";
import "../styles/SectionInformations.css";

/**
 *
 * @returns {JSX} : Composant qui affiche les informations de sections differentes
 * (utilisé dans les fiches logements et dans la page "A propos").
 *
 */

function SectionInformations(props) {
  const [ParagrapheVisible, setParagrapheVisible] = useState(false);

  const ParagrapheActif = () => {
    setParagrapheVisible(!ParagrapheVisible);
  };

  return (
    <div className="descriptionTotalite">
    <p className="sectionInformation">
      <span>{props.title}</span>
      <span>
        {ParagrapheVisible ? (
          <i className="fa-solid fa-chevron-down" onClick={ParagrapheActif}></i>
        ) : (
          <i className="fa-solid fa-chevron-up" onClick={ParagrapheActif}></i>
        )}
      </span>
    </p>
    {ParagrapheVisible && (
      <p className="sectionParagraphe">{props.content}</p>
    )}
  </div>

    /* si ma condition Paragraphevisible est "false" alors le paragraphe ne s'affiche pas.
        Quand on clique sur l'icone, la fonction "ParagrapheActif s'execute :la fonction prendra le contraire de l'etat actuel du paragraphe (c-a-d non visible car false) et l'affichera 
      */
  );
}

export default SectionInformations;
