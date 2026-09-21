import Image from "next/image";

// Les produits. Pour en ajouter un, copie un objet du tableau.
const produits = [
  {
    nom: "Miel brut",
    image: "/produit-1.jpg",
    alt: "Pot de miel brut",
    description: "Texte à venir.",
    format: 500,
    prix: 13.00,
    enStock: true,
    saison: "Été",
    annee: 2026,
    commentaire: "J'acheterais tout le stock si je pouvais! -Jacques"
  },
  {
    nom: "Miel barraté",
    image: "/produit-2.jpg",
    alt: "Pot de miel barraté",
    description: "Texte à venir.",
    format: 500,
    prix: 15.00,
    enStock: true,
    saison: "Automne",
    annee: 2025,
    commentaire: "Vraiment onctueux, la famille C-A-P-O-T-T-E! -Martine"
  },
  {
    nom: "Caramel au miel",
    image: "/produit-3.jpg",
    alt: "Pot de caramel au miel",
    description: "Texte à venir.",
    format: 250,
    prix: 7.50,
    enStock: false,
    saison: "Été",
    annee: 2026,
    commentaire: "Wowww! <3 -Monique"
  },
];

export default function Produits() {
  return (
    <div className="accueil">
      {/* Même bannière que les autres pages */}
      <section className="accueil-banniere">
        <Image
          src="/produits-banniere.jpg"
          alt="Les produits du Miel-sur-Quévillon"
          fill
          priority
          sizes="(min-width: 780px) 780px, 100vw"
          className="accueil-banniere-img"
        />
      </section>

      <div className="accueil-sections">
        {produits.map((produit) => (
          <section key={produit.nom} className="accueil-section">
            <h2 className="accueil-titre">{produit.nom}</h2>

            {/* Image toujours à gauche */}
            <div className="accueil-boite boite-image">
              <div className="boite-image-photo">
                <Image
                  src={produit.image}
                  alt={produit.alt}
                  fill
                  sizes="(min-width: 780px) 192px, 40vw"
                  className="accueil-banniere-img"
                />
              </div>

              {/* Colonne d'informations à droite */}
              <div className="boite-image-texte">
                <p>{produit.description}</p>

                <p>
                  <strong>Disponibilité: </strong>
                  <span
                    className={
                      produit.enStock ? "stock-oui" : "stock-non"
                    }
                  >
                    {produit.enStock ? "En stock" : "Rupture de stock"}
                  </span>
                </p>

                <p>
                  <strong>Format: </strong>
                  {produit.format}g
                </p>

                <p>
                  <strong>Prix: </strong>
                  {produit.prix.toFixed(2)}$
                </p>

                <p>
                  <strong>Miel de: </strong>
                  {produit.saison} {produit.annee}
                </p>
                <p>
                    <strong>Commentaire:</strong> {produit.commentaire}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}