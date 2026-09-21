"use client";

import Image from "next/image";
import { useState } from "react";


type Page = "accueil" | "produits" | "abeilles";

type HeaderProps = {
  pageActive: Page;
  onNavigate: (page: Page) => void;
};

export default function Header({ pageActive, onNavigate }: HeaderProps) {
  // false = texte normal, true = texte agrandi
  const [texteGros, setTexteGros] = useState(false);

  function changerTaille() {
    const nouvelEtat = !texteGros;
    setTexteGros(nouvelEtat);


    if (nouvelEtat) {
      document.documentElement.classList.add("texte-gros");
    } else {
      document.documentElement.classList.remove("texte-gros");
    }
  }

  return (
    <header className="entete">
      <div className="entete-contenu">
        {/* Logo*/}
        <button
          className="entete-logo"
          onClick={() => onNavigate("accueil")}
          aria-label="Retour à l'accueil"
        >
          <Image
            src="/LeMiel_Logo_Sticker_Crop.png"
            alt="Logo Le-Miel-sur-Quévillon"
            width={100}
            height={100}
            priority
          />
        </button>

        {/* Titre + boutons de navigation */}
        <div className="entete-centre">
          <h1 className="entete-titre">Le-Miel-sur-Quévillon</h1>

          <nav className="entete-nav">
            <button
              className={
                pageActive === "produits" ? "btn-nav btn-nav-actif" : "btn-nav"
              }
              onClick={() => onNavigate("produits")}
            >
              <svg className="icone-marche" viewBox="0 0 576 512" aria-hidden="true">
                <path d="M30.7 72.3C37.6 48.4 59.5 32 84.4 32l344 0c24.9 0 46.8 16.4 53.8 40.3l23.4 80.2c12.8 43.7-20.1 87.5-65.6 87.5-26.3 0-49.4-14.9-60.8-37.1-11.6 21.9-34.6 37.1-61.4 37.1-26.6 0-49.7-15-61.3-37-11.6 22-34.7 37-61.3 37-26.8 0-49.8-15.1-61.4-37.1-11.4 22.1-34.5 37.1-60.8 37.1-45.6 0-78.4-43.7-65.6-87.5L30.7 72.3zM96.4 352l320 0 0-66.4c7.6 1.6 15.5 2.4 23.5 2.4 14.3 0 28-2.6 40.5-7.2l0 151.2c0 26.5-21.5 48-48 48l-352 0c-26.5 0-48-21.5-48-48l0-151.2c12.5 4.6 26.1 7.2 40.5 7.2 8.1 0 15.9-.8 23.5-2.4l0 66.4z" />
              </svg>
              <span>Nos produits</span>
            </button>

            <button
              className={
                pageActive === "abeilles" ? "btn-nav btn-nav-actif" : "btn-nav"
              }
              onClick={() => onNavigate("abeilles")}
            >
              <svg className="icone-abeille" viewBox="0 0 576 512" aria-hidden="true">
                <path d="M192 96c0-53 43-96 96-96s96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6zm345.6 12.8c10.6 14.1 7.7 34.2-6.4 44.8l-97.8 73.3c5.3 8.9 9.3 18.7 11.8 29.1l98.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 32c0 2.6-.1 5.3-.2 7.9l83.4 62.5c14.1 10.6 17 30.7 6.4 44.8s-30.7 17-44.8 6.4l-63.1-47.3c-23.2 44.2-66.5 76.2-117.7 83.9L312 280c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 230.2c-51.2-7.7-94.5-39.7-117.7-83.9L83.2 473.6c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8l83.4-62.5c-.1-2.6-.2-5.2-.2-7.9l0-32-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l98.8 0c2.5-10.4 6.5-20.2 11.8-29.1L44.8 153.6c-14.1-10.6-17-30.7-6.4-44.8s30.7-17 44.8-6.4L192 184c12.3-5.1 25.8-8 40-8l112 0c14.2 0 27.7 2.8 40 8l108.8-81.6c14.1-10.6 34.2-7.7 44.8 6.4z" />
              </svg>
              <span>Nos abeilles</span>
            </button>
          </nav>
        </div>

        {/* Bouton A+ / A- */}
        <button
          className="btn-taille"
          onClick={changerTaille}
          aria-label={
            texteGros ? "Revenir à la taille normale" : "Agrandir le texte"
          }
        >
          {texteGros ? "A-" : "A+"}
        </button>
      </div>
    </header>
  );
}