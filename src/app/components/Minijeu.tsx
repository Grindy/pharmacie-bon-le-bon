"use client";

import { useEffect, useState } from "react";

const NOMBRE_A_DEVINER = 42;
const CLE_LOCALSTORAGE = "jeu-devine-termine";

export default function MiniJeu() {
  const [visible, setVisible] = useState(false);
  const [valeur, setValeur] = useState("");

  // Résultat du jeu
  const [resultat, setResultat] = useState<"gagne" | "perdu" | null>(null);

  // Le code du gagnant si on gagnne
  const [code, setCode] = useState("");

  // Au chargement de la page, on regarde si le jeu a déjà été joué avant
  useEffect(() => {
    const dejaJoue = localStorage.getItem(CLE_LOCALSTORAGE);
    if (dejaJoue !== "oui") {
      setVisible(true);
    }
  }, []);

  function essayer() {
    const nombre = Number(valeur);

    if (nombre === NOMBRE_A_DEVINER) {
      // generer un code promo
      const chiffres = Math.floor(1000 + Math.random() * 9000);
      setCode("BZZ" + chiffres);
      setResultat("gagne");
    } else {
      setResultat("perdu");
    }
  }

  function fermerPopup() {
    setResultat(null);
    setVisible(false);
    // jeu joué, on mémorise pour pas réafficher
    localStorage.setItem(CLE_LOCALSTORAGE, "oui");
  }

  // Le jeu a été joué avant
  if (!visible) {
    return null;
  }

  return (
    <>
      <div className="jeu-toast">
        <p className="jeu-toast-titre">Devinez et GAGNEZ!!!</p>
        <p className="jeu-toast-texte">Un nombre entre 1 et 100</p>

        <input
          type="number"
          value={valeur}
          onChange={(e) => setValeur(e.target.value)}
          className="jeu-toast-input"
          placeholder="Ton nombre"
        />

        <button className="btn-nav jeu-toast-bouton" onClick={essayer}>
          Deviner
        </button>
      </div>

      {/* Le popup de résultat*/}
      {resultat !== null && (
        <div className="popup-fond">
          <div className="popup-boite">
            {resultat === "gagne" ? (
              <>
                <p className="popup-titre">
                  Vous avez gagné! Le nombre était bien {NOMBRE_A_DEVINER}!
                </p>
                <p>Votre prix :</p>
                <p className="popup-prix">
                  Visite du rucher gratuite! Contactez-nous
                </p>
                <p className="popup-code">Votre code : {code}</p>
              </>
            ) : (
              <p className="popup-titre">
                Perdu! Le nombre était {NOMBRE_A_DEVINER}. Réessayez une prochaine fois!
              </p>
            )}

            <button className="btn-nav items-center justify-center" onClick={fermerPopup}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}