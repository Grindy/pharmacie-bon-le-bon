import Image from "next/image";

const blocs = [
  {
    titre: "Les héroïnes du projet",
    cote: "gauche",
    image: "/abeilles-1.jpg",
    alt: "Abeille butinant",
    textes: ["Les abeilles sont le cœur battant et la véritable raison d'être de notre projet d'apiculture. Ces pollinisatrices d'exception accomplissent un travail colossal qui donne vie à nos écosystèmes et sans elle nous ne pourrions récolter de miel dans notre communauté."],
  },
  {
    titre: "Le Nord et les abeilles",
    cote: "droite",
    image: "/abeilles-2.jpg",
    alt: "Abeilles sur un cadre",
    textes: ["Face à un climat rigoureux et à une saison de butinage nettement plus courte, les abeilles nordiques font preuve d'une adaptation remarquable. Pour surmonter des étés très brièfs mais intenses, elles maximisent chaque heure d'ensoleillement et gèrent leurs réserves de miel afin de passer au travers de notre hiver rigoureux."],
  },
  {
    titre: "Le goût du Nord",
    cote: "gauche",
    image: "/abeilles-3.jpg",
    alt: "Paysage boréale",
    textes: ["Constitué entre autre du nectar de la verge d'or, de l'épilobe et des fleurs de bleuets, notre miel capture la pureté sauvage de la Boréalie. On y voit le reflet des floraisons courtes mais intenses de notre territoire."],
  },
];

export default function Abeilles() {
  return (
    <div className="accueil">
      <section className="accueil-banniere">
        <Image
          src="/abeilles-banniere.jpg"
          alt="Les abeilles du Miel-sur-Quévillon"
          fill
          priority
          sizes="(min-width: 780px) 780px, 100vw"
          className="accueil-banniere-img"
        />
      </section>

      <div className="accueil-sections">
        {blocs.map((bloc) => (
          <section key={bloc.titre} className="accueil-section">
            <h2
              className={
                bloc.cote === "droite"
                  ? "accueil-titre accueil-titre-droite"
                  : "accueil-titre"
              }
            >
              {bloc.titre}
            </h2>

            <div
              className={
                bloc.cote === "droite"
                  ? "accueil-boite boite-image boite-image-inverse"
                  : "accueil-boite boite-image"
              }
            >
              <div className="boite-image-photo">
                <Image
                  src={bloc.image}
                  alt={bloc.alt}
                  fill
                  sizes="(min-width: 780px) 250px, 40vw"
                  className="accueil-banniere-img"
                />
              </div>

              <div className="boite-image-texte">
                {bloc.textes.map((texte, i) => (
                  <p key={i}>{texte}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}