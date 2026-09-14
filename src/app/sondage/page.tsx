"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePoints } from "@/app/context/PointsContext"
// Décommentez si vous souhaitez rediriger vers une page distincte :
// import { useRouter } from "next/navigation";

export default function PageSondage() {
  // const router = useRouter();
  const [estSoumis, setEstSoumis] = useState(false);
  const [numeroCommande, setNumeroCommande] = useState("");
  const { points: pointsFidelite, setPoints: setPointsFidelite } = usePoints(); // remplace useState(12)
  const [pointAjoute, setPointAjoute] = useState(false);

  // Fonction pour gérer l'envoi du formulaire
  const gererSoumission = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Simulation de l'ajout du point fidélité (+1)
    setPointsFidelite((prev) => prev + 1);
    setPointAjoute(true);

    // 2. Affichage de la confirmation du concours
    setEstSoumis(true);

    // OPTION : Si vous préférez rediriger vers une route dédiée :
    // router.push(`/concours/confirmation?commande=${encodeURIComponent(numeroCommande)}`);
  };

  // Affichage après avoir soumis le sondage : Confirmation de participation au concours
  if (estSoumis) {
    return (
      <section className="max-w-2xl mx-auto py-16 px-4 text-center space-y-6" style={{ color: "var(--foreground)" }}>
        <div 
          className="rounded-xl p-8 sm:p-12 shadow-lg space-y-6 border"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          {/* Icône de succès */}
          <div className="flex justify-center">
            <div className="bg-green-100 text-green-600 p-4 rounded-full">
              <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <div>
            <span className="text-sm uppercase tracking-wider font-bold opacity-75">Confirmation</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-1" style={{ color: "var(--accent-dark)" }}>
              🎉 Participation confirmée au concours !
            </h1>
          </div>

          <p className="text-lg opacity-90">
            Merci d'avoir complété notre sondage ! Votre numéro de commande <strong className="underline">{numeroCommande || "CMD-XXXXX"}</strong> est officiellement inscrit au prochain tirage mensuel de la <strong>Pharmacie Bon Le Bon</strong>.
          </p>

          {/* Simulation du point fidélité */}
          <div 
            className="p-4 rounded-lg flex items-center justify-between gap-4 border text-left"
            style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">⭐</div>
              <div>
                <p className="font-semibold text-sm">Programme Privilège Pharmacie Bon Le Bon</p>
                <p className="text-xs opacity-75">Récompense sondage créditée à votre compte</p>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block bg-green-500/15 text-green-700 dark:text-green-400 font-bold text-xs px-2.5 py-1 rounded-full animate-pulse">
                +1 point ajouté !
              </span>
              <p className="text-xs mt-1 opacity-80">Nouveau solde : <strong>{pointsFidelite} points</strong></p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs opacity-75">
            <Link href="/concours" className="underline hover:opacity-100">
              Détails du concours
            </Link>
            <span>•</span>
            <Link href="/concours/reglements" className="underline hover:opacity-100">
              Règlements officiels
            </Link>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="w-full sm:w-auto font-bold py-3 px-8 rounded-lg transition-colors hover:opacity-90 text-center"
              style={{ background: "var(--accent)", color: "var(--background)" }}
            >
              Retour à l'accueil
            </Link>
            <Link 
              href="/profil"
              className="w-full sm:w-auto py-3 px-6 rounded-lg font-semibold hover:underline text-center border"
              style={{ borderColor: "var(--border)" }}
            >
              Voir mon solde fidélité
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Affichage du formulaire de sondage
  return (
    <section className="max-w-3xl mx-auto py-10 px-4" style={{ color: "var(--foreground)" }}>
      {/* En-tête */}
      <div className="mb-10 text-center space-y-3">
        <Link
          href="/concours"
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
        >
          🎁 En savoir plus sur le concours →
        </Link>
        <h1 className="text-4xl font-bold" style={{ color: "var(--accent)" }}>Votre avis compte</h1>
        <p className="text-lg opacity-80 max-w-xl mx-auto">
          Répondez à ce court sondage pour courir la chance de gagner notre carte-cadeau mensuelle de 100 $ et recevez automatiquement <strong>1 point fidélité</strong> !
        </p>
        <div className="text-sm flex justify-center items-center gap-2">
          <Link 
            href="/concours" 
            className="underline opacity-80 hover:opacity-100 transition-opacity font-medium"
          >
            Présentation du concours
          </Link>
          <span className="opacity-40">|</span>
          <Link 
            href="/concours/reglements" 
            className="underline opacity-80 hover:opacity-100 transition-opacity"
          >
            Règlements officiels
          </Link>
        </div>
      </div>

      {/* Formulaire */}
      <form 
        onSubmit={gererSoumission}
        className="rounded-xl p-6 sm:p-10 shadow-lg space-y-8"
        style={{ background: "var(--card)" }}
      >
        {/* Section Numéro de commande / Facture */}
        <div className="space-y-2">
          <label htmlFor="numeroCommande" className="block text-lg font-semibold">
            Numéro de commande ou de facture *
          </label>
          <input 
            type="text" 
            id="numeroCommande"
            name="numeroCommande"
            value={numeroCommande}
            onChange={(e) => setNumeroCommande(e.target.value)}
            placeholder="Ex. : CMD-12345 ou FAC-67890"
            className="w-full p-3 rounded-md border focus:ring-2 outline-none bg-transparent"
            style={{ borderColor: "var(--border)" }}
            required
          />
          <p className="text-sm opacity-70">
            Requis pour valider votre inscription au tirage et créditer votre point sur votre dossier.
          </p>
        </div>

        {/* Question 1 : Satisfaction générale */}
        <div className="space-y-3">
          <label className="block text-lg font-semibold">
            1. Comment évaluez-vous votre satisfaction générale vis-à-vis de notre pharmacie en ligne ?
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            {[1, 2, 3, 4, 5].map((note) => (
              <label key={note} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-black/5 rounded">
                <input type="radio" name="satisfaction" value={note} required className="w-5 h-5" />
                <span>{note} {note === 1 ? "(Insatisfait)" : note === 5 ? "(Très satisfait)" : ""}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 2 : Facilité d'utilisation */}
        <div className="space-y-3">
          <label className="block text-lg font-semibold">
            2. Avez-vous trouvé facilement ce que vous cherchiez aujourd'hui ?
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="trouve_produit" value="oui" required className="w-5 h-5" />
              <span>Oui, très facilement</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="trouve_produit" value="partiellement" className="w-5 h-5" />
              <span>Oui, mais j'ai dû chercher un peu</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="trouve_produit" value="non" className="w-5 h-5" />
              <span>Non, je n'ai pas trouvé mon produit</span>
            </label>
          </div>
        </div>

        {/* Question 3 : Section la plus utile */}
        <div className="space-y-3">
          <label className="block text-lg font-semibold">
            3. Quelle section du site utilisez-vous le plus ?
          </label>
          <select 
            className="w-full p-3 rounded-md border focus:ring-2 outline-none bg-transparent"
            style={{ borderColor: "var(--border)" }}
            defaultValue=""
            required
          >
            <option value="" disabled>Sélectionnez une option...</option>
            <option value="catalogue">Le catalogue de produits</option>
            <option value="circulaire">La circulaire / Les rabais</option>
            <option value="profil">Mon profil client / Historique</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Question 4 : Commentaires libres */}
        <div className="space-y-3">
          <label className="block text-lg font-semibold">
            4. Avez-vous des suggestions pour améliorer notre service ? (Optionnel)
          </label>
          <textarea 
            rows={4}
            placeholder="Partagez vos idées avec nous..."
            className="w-full p-3 rounded-md border focus:ring-2 outline-none bg-transparent"
            style={{ borderColor: "var(--border)" }}
          ></textarea>
        </div>

        {/* Boutons d'action et liens légaux */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <Link 
              href="/"
              className="w-full sm:w-auto text-center font-semibold hover:underline opacity-80"
            >
              Annuler et retourner
            </Link>
            <button 
              type="submit"
              className="w-full sm:w-auto font-bold py-3 px-8 rounded-lg transition-colors hover:opacity-90"
              style={{ background: "var(--accent)", color: "var(--background)" }}
            >
              Participer au concours (+1 pt)
            </button>
          </div>

          <p className="text-center text-xs opacity-70">
            En soumettant ce formulaire, vous acceptez les{" "}
            <Link href="/concours/reglements" className="underline hover:opacity-100">
              règlements officiels du concours
            </Link>.
          </p>
        </div>
      </form>
    </section>
  );
}