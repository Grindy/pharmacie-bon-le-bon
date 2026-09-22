import Image from "next/image";
import MiniJeu from "../components/Minijeu";

type AccueilProps = {
  onNavigate: (page: "accueil" | "produits" | "abeilles") => void;
};

export default function Accueil({ onNavigate }: AccueilProps) {
  return (
    <div className="accueil">
      <MiniJeu/>
      {/* image sur toute la largeur */}
      <section className="accueil-banniere">
        <Image
        src="/ruches.jpg"
        alt="Ruches du Miel-sur-Quévillon"
        fill
        priority
        sizes="(min-width: 1200px) 1200px, 100vw"
        className="accueil-banniere-img"
        />
      </section>

      {/* textes */}
      <div className="accueil-sections">
        <section className="accueil-section">
          <h2 className="accueil-titre">Qui sommes-nous?</h2>
          <div className="accueil-boite">
            <p>Nous sommes Le-Miel-sur-Quévillon, un organisme à but non-lucratif établit sur le territoire de la Baie-James, à Lebel-sur-Quévillon.</p>
          </div>
        </section>

  
        <section className="accueil-section">
          <h2 className="accueil-titre accueil-titre-droite">Notre mission</h2>
          <div className="accueil-boite">
            <p>Notre mission est d’implanter l’apiculture dans le Nord-du-Québec, à Lebel-sur-Quévillon, dans le but de développer l’autonomie alimentaire
                de la région et aussi d’éduquer le public face à l’apiculture et 
                à l’importance des pollinisateurs.</p>
            <p>Ambassadeurs des abeilles, nous œuvrons à révéler leur rôle essentiel et à mettre en valeur notre territoire. Nous contribuons à
                notre communauté et à faire rayonner une région où la résilience, le vivant et le savoir-faire façonnent notre avenir. </p>
          </div>
        </section>

        <section className="accueil-section">
          <h2 className="accueil-titre">Nos produits</h2>
          <div className="accueil-boite">
            <p className="mb-6">L'authenticité est au coeur de notre démarche et de nos produits. Ainsi donc, depuis le tout début nous offrons un miel nordique de qualité, vendu localement sous forme de miel brut.
                Nous nous efforçons également de créer de nouveaux produits à valeur ajoutée. Cette année nous sommes fiers de pouvoir offrir des produits de caramel à base de miel ainsi que du miel barraté, en espérant que ces produits soient à la hauteur de la matière brut que nos abeilles produisent!
            </p>

            {/* bouton produits*/}
            <button
              className="btn-nav accueil-bouton"
              onClick={() => onNavigate("produits")}
            >
            <svg className="icone-marche" viewBox="0 0 576 512" aria-hidden="true">
            <path d="M30.7 72.3C37.6 48.4 59.5 32 84.4 32l344 0c24.9 0 46.8 16.4 53.8 40.3l23.4 80.2c12.8 43.7-20.1 87.5-65.6 87.5-26.3 0-49.4-14.9-60.8-37.1-11.6 21.9-34.6 37.1-61.4 37.1-26.6 0-49.7-15-61.3-37-11.6 22-34.7 37-61.3 37-26.8 0-49.8-15.1-61.4-37.1-11.4 22.1-34.5 37.1-60.8 37.1-45.6 0-78.4-43.7-65.6-87.5L30.7 72.3zM96.4 352l320 0 0-66.4c7.6 1.6 15.5 2.4 23.5 2.4 14.3 0 28-2.6 40.5-7.2l0 151.2c0 26.5-21.5 48-48 48l-352 0c-26.5 0-48-21.5-48-48l0-151.2c12.5 4.6 26.1 7.2 40.5 7.2 8.1 0 15.9-.8 23.5-2.4l0 66.4z" />
            </svg>
              <span>Nos produits</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}