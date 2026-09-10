"use client";

import React, { useState } from "react";

const REWARDS = [
  {
    id: "cadeau-premium",
    title: "Emballage cadeau premium",
    description: "Bombe de bain, parfum et petites gâteries — le kit parfait pour elle.",
    points: 45,
    remaining: 22,
    badge: "Nouveau!",
    badgeColor: "bg-green-100 text-green-800 [.colorblind_&]:bg-blue-100 [.colorblind_&]:text-blue-900",
  },
  {
    id: "carte-cadeau-20",
    title: "Carte-cadeau de 20$",
    description: "Utilisable sur tous les produits en pharmacie, sans exception.",
    points: 20,
    remaining: 30,
    badge: null,
    badgeColor: "",
  },
  {
    id: "chocolats-fins",
    title: "Ensemble de chocolats fins",
    description: "Une sélection gourmande de chocolats fins, en édition limitée.",
    points: 15,
    remaining: 2,
    badge: "Faites vite!",
    badgeColor: "bg-red-100 text-red-800",
  },
];

export default function RecompensesPage() {
  const [userPoints] = useState(480);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <div className="min-h-screen text-gray-900 font-sans pb-12">
      <main className="max-w-6xl mx-auto px-4 pt-10">
        {/* Bandeau de points */}
        <div className="w-full bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-green-700 [.colorblind_&]:text-blue-800">
              Échanger mes points
            </h1>
            <p className="text-gray-600 mt-1">
              Points BonLeBon disponibles :{" "}
              <span className="font-bold text-green-700 [.colorblind_&]:text-blue-800">
                {userPoints}
              </span>
            </p>
          </div>
        </div>

        {/* Cards de récompenses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {REWARDS.map((reward) => (
            <div
              key={reward.id}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col relative"
            >
              {reward.badge && (
                <span
                  className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full ${reward.badgeColor}`}
                >
                  {reward.badge}
                </span>
              )}

              <h2 className="text-xl font-bold text-green-700 [.colorblind_&]:text-blue-800 mb-2 pr-20">
                {reward.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4 flex-1">
                {reward.description}
              </p>

              <div className="flex items-baseline justify-between mb-1">
                <span className="text-2xl font-bold text-gray-900">
                  {reward.points} pts
                </span>
                <span className="text-sm text-gray-500">
                  ({reward.points}$ de valeur)
                </span>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                Plus que {reward.remaining} offres restantes
              </p>

              <button className="w-full bg-[#FFF5C3] hover:bg-[#fde047] text-gray-900 font-bold py-3 rounded-lg transition-colors">
                Échanger
              </button>
            </div>
          ))}
        </div>

        {/* Pagination (non fonctionnelle) */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="bg-white border border-gray-200 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:text-green-700 [.colorblind_&]:hover:text-blue-800 hover:border-gray-300 transition-colors"
            aria-label="Page précédente"
          >
            &lt;
          </button>

          <span className="text-sm font-medium text-gray-600">
            Page {currentPage}/{totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="bg-white border border-gray-200 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:text-green-700 [.colorblind_&]:hover:text-blue-800 hover:border-gray-300 transition-colors"
            aria-label="Page suivante"
          >
            &gt;
          </button>
        </div>
      </main>
    </div>
  );
}