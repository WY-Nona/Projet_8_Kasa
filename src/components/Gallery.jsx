import { useState } from "react";
import "../styles/Gallery.css";

/**
 *
 * @returns {JSX} : Composant carousel avec sa numérotation.
 *
*/

function LogementImage(props) {
  const pictures = props.pictures;
  const [Img, ImgActuelle] = useState(0);

  const ClassActive = (i) => {
    if (i === Img) return "ficheLogementImgActive";
    return "";
  };
  const ImageSuivante = () => {
    ImgActuelle((Img + 1) % pictures.length);
  };

  const ImagePrecedente = () => {
    const ImgPrecedente = Img - 1;
    if (ImgPrecedente < 0) {
      ImgActuelle(pictures.length - 1);
    } else {
      ImgActuelle(ImgPrecedente);
    }
  };

  return (
    <div className="ImageLogement">
      {pictures.map((picture, i) => (
        <img
          key={picture}
          src={picture}
          alt="pictures"
          className={ClassActive(i)}
        ></img>
      ))}
      {pictures.length > 1 && (
        <div>
          <button onClick={ImagePrecedente} className="BoutonPrecedent">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={ImageSuivante} className="BoutonSuivant">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}

      {/* Numérotation des images */}
      {pictures.length > 1 && (
        <div className="Numerotation">
          {Img + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}
/*  {pictures.lenght >1 && ... : affiche les boutons et la numérotation uniquement si la longueur du tableau est supérieure à une image } */
export default LogementImage;