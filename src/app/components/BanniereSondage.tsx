"use client";

import React, { useState } from "react";
import Link from "next/link"; 

export default function BanniereSondage() {
  const [afficherSondage, setAfficherSondage] = useState(true);

  if (!afficherSondage) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 w-full p-4 shadow-[0_-4px_15px_rgba(0,0,0,0.1)] z-50 animate-fade-in-up"
      style={{ 
        background: "var(--accent)", 
        color: "var(--background)" 
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center sm:text-left">
          <h4 className="font-bold text-lg mb-1">Votre avis compte ! 📝</h4>
          <p className="text-sm opacity-90">
            Aidez-nous à améliorer votre expérience en répondant à un court sondage de 2 minutes. <strong>Courez la chance de gagner une carte-cadeau de 100$ chaque mois !</strong>
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
          <Link 
            href="/concours" 
            className="font-bold py-2 px-6 rounded-lg transition-colors whitespace-nowrap hover:opacity-90 shadow-sm"
            style={{ 
              background: "var(--background)", 
              color: "var(--accent)" 
            }}
          >
            Participer
          </Link>
          
          <button 
            onClick={() => setAfficherSondage(false)}
            className="p-2 rounded-full transition-colors hover:bg-black/10"
            aria-label="Fermer le sondage"
          >
            <IconeFermer />
          </button>
        </div>
      </div>
    </div>
  );
}

function IconeFermer({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}