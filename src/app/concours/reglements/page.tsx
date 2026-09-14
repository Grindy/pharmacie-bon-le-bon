"use client";

import React from "react";
import Link from "next/link";

export default function PageReglementsConcours() {
  return (
    <section className="max-w-4xl mx-auto py-10 px-4 sm:px-6" style={{ color: "var(--foreground)" }}>
      {/* En-tête */}
      <div className="mb-10 text-center space-y-3">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800">
          Règlements officiels
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--accent)" }}>
          Concours mensuel « Votre avis compte »
        </h1>
        <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto">
          Courez la chance de remporter une carte-cadeau de 100 $ échangeable à la Pharmacie Bon Le Bon en partageant votre expérience.
        </p>
      </div>

      {/* Conteneur des règlements */}
      <div 
        className="rounded-xl p-6 sm:p-10 shadow-lg border space-y-8 text-sm sm:text-base leading-relaxed"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        {/* Résumé en encadré */}
        <div 
          className="p-5 rounded-lg border space-y-2"
          style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}
        >
          <h2 className="font-bold text-lg" style={{ color: "var(--accent-dark)" }}>
            Aperçu rapide du tirage
          </h2>
          <ul className="space-y-1 opacity-90 list-disc list-inside">
            <li><strong>Prix mensuel :</strong> Une (1) carte-cadeau numérique de 100 $ CA.</li>
            <li><strong>Fréquence :</strong> Un tirage le premier lundi de chaque mois.</li>
            <li><strong>Admissibilité :</strong> Résidents du Québec âgés de 18 ans et plus.</li>
            <li><strong>Bonus fidélité :</strong> 1 point fidélité accordé pour chaque formulaire valide rempli.</li>
          </ul>
        </div>

        {/* Section 1 : Organisateur */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold" style={{ color: "var(--accent-dark)" }}>
            1. Organisateur du concours
          </h2>
          <p className="opacity-90">
            Le concours « Votre avis compte » est organisé et administré par la <strong>Pharmacie Bon Le Bon</strong>. Il vise à recueillir l’appréciation des clients afin d’améliorer continuellement l’offre de produits et la qualité du service en ligne.
          </p>
        </div>

        {/* Section 2 : Période du concours */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold" style={{ color: "var(--accent-dark)" }}>
            2. Période d’admissibilité et tirages
          </h2>
          <p className="opacity-90">
            Le concours se déroule par cycles mensuels continus. Chaque période de participation commence le premier jour du mois civil à 00 h 01 (HNE) et se termine le dernier jour du même mois à 23 h 59 (HNE). Les participations reçues après cette date limite sont automatiquement reportées au tirage du mois suivant.
          </p>
        </div>

        {/* Section 3 : Admissibilité */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold" style={{ color: "var(--accent-dark)" }}>
            3. Critères d'admissibilité
          </h2>
          <p className="opacity-90">
            Le concours s’adresse exclusivement aux résidents autorisés du Québec ayant atteint l’âge légal de la majorité (18 ans) à la date de leur inscription. Sont exclus : les membres de la direction et employés de la Pharmacie Bon Le Bon, leurs représentants, ainsi que les membres de leur domicile immédiat.
          </p>
        </div>

        {/* Section 4 : Modalités de participation */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold" style={{ color: "var(--accent-dark)" }}>
            4. Comment participer
          </h2>
          <p className="opacity-90">
            Pour obtenir une (1) inscription au tirage au sort mensuel, le participant doit :
          </p>
          <ol className="list-decimal list-inside space-y-1 pl-2 opacity-90">
            <li>Accéder au sondage officiel de satisfaction de la Pharmacie Bon Le Bon ;</li>
            <li>Inscrire un <strong>numéro de commande ou de facture valide</strong> issu d’un achat en ligne ou en succursale ;</li>
            <li>Remplir l'ensemble des questions obligatoires et soumettre le formulaire.</li>
          </ol>
          <p className="opacity-90 mt-2">
            <strong>Limite :</strong> Une (1) seule participation par numéro de commande ou facture. L’envoi du formulaire attribue également automatiquement un (1) point de récompense au compte fidélité associé.
          </p>
        </div>

        {/* Section 5 : Description du prix */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold" style={{ color: "var(--accent-dark)" }}>
            5. Description et valeur du prix
          </h2>
          <p className="opacity-90">
            Chaque mois, un (1) gagnant sélectionné remportera une <strong>carte-cadeau Pharmacie Bon Le Bon d’une valeur de 100 $ CA</strong>.
          </p>
          <p className="text-sm opacity-75">
            Le prix doit être accepté tel quel, n’est ni monnayable, ni transférable, ni échangeable. Conformément à la législation applicable aux pharmacies, la carte-cadeau est valide sur les produits de parapharmacie, beauté, soins d'hygiène et alimentation, à l'exclusion des médicaments sur ordonnance.
          </p>
        </div>

        {/* Section 6 : Tirage et contact du gagnant */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold" style={{ color: "var(--accent-dark)" }}>
            6. Tirage au sort et réclamation du prix
          </h2>
          <p className="opacity-90">
            Le tirage au sort électronique est effectué au hasard le premier lundi ouvrable de chaque mois parmi toutes les participations admissibles du mois précédent.
          </p>
          <p className="opacity-90">
            La personne sélectionnée sera contactée par courriel ou téléphone dans les <strong>cinq (5) jours ouvrables</strong> suivant le tirage. Pour être déclarée gagnante, elle devra répondre correctement à une question d'habileté mathématique d'usage et confirmer ses coordonnées de livraison. À défaut de réponse dans un délai de 7 jours ouvrables, un nouveau participant sera tiré au sort.
          </p>
        </div>

        {/* Section 7 : Protection des données */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold" style={{ color: "var(--accent-dark)" }}>
            7. Renseignements personnels
          </h2>
          <p className="opacity-90">
            Les données recueillies dans le cadre du sondage sont traitées de manière confidentielle et servent uniquement à évaluer nos services, valider les participations au concours et créditer le point fidélité au profil client. Aucune donnée personnelle n'est vendue ou partagée avec des tiers à des fins publicitaires.
          </p>
        </div>

        {/* Liens de retour */}
        <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
          <Link 
            href="/sondage"
            className="w-full sm:w-auto text-center font-semibold hover:underline opacity-80"
          >
            ← Retourner au sondage
          </Link>
          <Link 
            href="/"
            className="w-full sm:w-auto font-bold py-3 px-8 rounded-lg transition-colors hover:opacity-90 text-center"
            style={{ background: "var(--accent)", color: "var(--background)" }}
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </section>
  );
}