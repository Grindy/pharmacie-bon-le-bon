"use client";

import React from "react";
import Link from "next/link";

export default function PagePresentationConcours() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6" style={{ color: "var(--foreground)" }}>
      {/* Bannière d'introduction */}
      <div className="text-center space-y-4 mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 shadow-sm">
          Tirage mensuel officiel
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--accent)" }}>
          Gagnez une carte-cadeau de 100 $
        </h1>
        <p className="text-lg sm:text-xl opacity-85 max-w-2xl mx-auto">
          Votre avis compte pour la Pharmacie Bon Le Bon. Prenez 2 minutes pour partager votre expérience d’achat et courez la chance de remporter notre prix mensuel !
        </p>
      </div>

      {/* Carte principale : Prix et Récompense */}
      <div 
        className="rounded-2xl p-6 sm:p-10 shadow-xl border mb-12 grid md:grid-cols-2 gap-8 items-center"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide opacity-70">
            Le prix de ce mois-ci
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--accent-dark)" }}>
            100 $ en carte-cadeau Pharmacie Bon Le Bon
          </h2>
          <p className="opacity-85 text-sm sm:text-base leading-relaxed">
            Valable sur vos produits préférés de santé, de beauté, de soins personnels et de parapharmacie, en ligne comme en succursale.
          </p>

          <div 
            className="p-4 rounded-xl border flex items-center gap-3"
            style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}
          >
            <div className="text-2xl">⭐</div>
            <div className="text-xs sm:text-sm">
              <span className="font-bold block">Récompense garantie :</span>
              <span className="opacity-80">Recevez automatiquement <strong>+1 point fidélité</strong> au dépôt de votre formulaire.</span>
            </div>
          </div>
        </div>

        {/* Représentation visuelle de la carte-cadeau */}
        <div className="flex justify-center">
          <div 
            className="w-full max-w-xs h-48 sm:h-52 rounded-2xl p-6 flex flex-col justify-between shadow-2xl text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
            }}
          >
            <div className="flex justify-between items-start">
              <span className="font-bold text-sm tracking-wider uppercase opacity-90">Pharmacie Bon Le Bon</span>
              <span className="text-xl">💳</span>
            </div>
            <div>
              <div className="text-xs opacity-75 font-mono">CARTE-CADEAU PRIVILÈGE</div>
              <div className="text-3xl font-extrabold tracking-tight mt-0.5">100 $ CAD</div>
            </div>
            <div className="text-[10px] tracking-widest opacity-60 uppercase">
              Tirage mensuel des membres
            </div>
          </div>
        </div>
      </div>

      {/* Étapes simples de participation */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold text-center" style={{ color: "var(--accent-dark)" }}>
          Comment participer en 3 étapes ?
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          <div 
            className="p-6 rounded-xl border text-center space-y-2"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div className="w-10 h-10 mx-auto rounded-full font-bold flex items-center justify-center text-sm mb-3"
                 style={{ background: "var(--accent)", color: "var(--background)" }}>
              1
            </div>
            <h3 className="font-bold">Ayez votre reçu</h3>
            <p className="text-sm opacity-80">
              Munissez-vous de votre numéro de commande web ou de reçu de caisse récent.
            </p>
          </div>

          <div 
            className="p-6 rounded-xl border text-center space-y-2"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div className="w-10 h-10 mx-auto rounded-full font-bold flex items-center justify-center text-sm mb-3"
                 style={{ background: "var(--accent)", color: "var(--background)" }}>
              2
            </div>
            <h3 className="font-bold">Remplissez le sondage</h3>
            <p className="text-sm opacity-80">
              Partagez votre avis sincère à travers 4 petites questions rapides (moins de 2 minutes).
            </p>
          </div>

          <div 
            className="p-6 rounded-xl border text-center space-y-2"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div className="w-10 h-10 mx-auto rounded-full font-bold flex items-center justify-center text-sm mb-3"
                 style={{ background: "var(--accent)", color: "var(--background)" }}>
              3
            </div>
            <h3 className="font-bold">Validez votre chance</h3>
            <p className="text-sm opacity-80">
              Obtenez instantanément +1 point fidélité et une participation pour le tirage au sort.
            </p>
          </div>
        </div>
      </div>

      {/* Bouton d'action principal (CTA) */}
      <div className="text-center space-y-4">
        <Link 
          href="/sondage"
          className="inline-block font-bold py-4 px-10 rounded-xl text-lg shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: "var(--accent)", color: "var(--background)" }}
        >
          Accéder au sondage & Participer →
        </Link>
        
        <div>
          <Link 
            href="/concours/reglements"
            className="text-xs sm:text-sm underline opacity-75 hover:opacity-100 transition-opacity"
          >
            Consulter les règlements officiels complets du concours
          </Link>
        </div>
      </div>
    </section>
  );
}