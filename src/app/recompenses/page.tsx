"use client";

import React, { useState } from "react";
import { usePoints } from "../context/PointsContext";

type Reward = {
  id: string;
  title: string;
  description: string;
  points: number;
  remaining: number;
  badge: string | null;
  badgeColor: string;
};

const REWARDS: Reward[] = [
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
  {
    id: "trousse-soins-peau",
    title: "Trousse de soins de la peau",
    description: "Nettoyant, sérum et crème hydratante pour une routine complète.",
    points: 35,
    remaining: 18,
    badge: null,
    badgeColor: "",
  },
  {
    id: "certificat-spa",
    title: "Certificat-cadeau spa",
    description: "Un moment de détente bien mérité dans un spa partenaire.",
    points: 60,
    remaining: 15,
    badge: "Nouveau!",
    badgeColor: "bg-green-100 text-green-800 [.colorblind_&]:bg-blue-100 [.colorblind_&]:text-blue-900",
  },
  {
    id: "vitamines-premium",
    title: "Ensemble de vitamines premium",
    description: "Multivitamines, vitamine D et oméga-3 pour toute la famille.",
    points: 25,
    remaining: 27,
    badge: null,
    badgeColor: "",
  },
  {
    id: "kit-premiers-soins",
    title: "Kit de premiers soins familial",
    description: "L'essentiel pour les petits bobos du quotidien, à la maison.",
    points: 30,
    remaining: 20,
    badge: null,
    badgeColor: "",
  },
  {
    id: "diffuseur-huiles",
    title: "Diffuseur d'huiles essentielles",
    description: "Un diffuseur ultrasonique avec un assortiment d'huiles apaisantes.",
    points: 40,
    remaining: 16,
    badge: null,
    badgeColor: "",
  },
  {
    id: "carte-cadeau-10",
    title: "Carte-cadeau de 10$",
    description: "Utilisable sur tous les produits en pharmacie, sans exception.",
    points: 10,
    remaining: 29,
    badge: null,
    badgeColor: "",
  },
];

const REWARDS_PER_PAGE = 3;


export default function RecompensesPage() {
  const { points: userPoints, setPoints: setUserPoints} = usePoints();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  

  const totalPages = Math.ceil(REWARDS.length / REWARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * REWARDS_PER_PAGE;
  const visibleRewards = REWARDS.slice(startIndex, startIndex + REWARDS_PER_PAGE);

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
          {visibleRewards.map((reward) => (
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

              <button
                onClick={() => setSelectedReward(reward)}
                className="w-full bg-[#FFF5C3] hover:bg-[#fde047] text-gray-900 font-bold py-3 rounded-lg transition-colors"
              >
                Échanger
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="bg-white border border-gray-200 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:text-green-700 [.colorblind_&]:hover:text-blue-800 hover:border-gray-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-gray-600"
            aria-label="Page précédente"
          >
            &lt;
          </button>

          <span className="text-sm font-medium text-gray-600 [.colorblind_&]:text-blue-800">
            Page {currentPage}/{totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="bg-white border border-gray-200 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:text-green-700 [.colorblind_&]:hover:text-blue-800 hover:border-gray-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-gray-600"
            aria-label="Page suivante"
          >
            &gt;
          </button>
        </div>

        {selectedReward && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 max-w-md w-full p-6">
              <h3 className="text-xl font-bold text-green-700 [.colorblind_&]:text-blue-800 mb-3">
                Confirmer l&apos;échange
              </h3>
              <p className="text-gray-700 mb-6">
                Échangez vos points pour{" "}
                <span className="font-semibold">{selectedReward.title}</span> ?
                <br />
                <br />
                Il sera expédié à l&apos;adresse que nous avons à votre dossier.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedReward(null)}
                  className="flex-1 border border-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                    onClick={() => {
                      setUserPoints((prev) => prev - selectedReward.points);
                      setSelectedReward(null);
                    }}
                    className="flex-1 bg-[#FFF5C3] hover:bg-[#fde047] text-gray-900 font-bold py-3 rounded-lg transition-colors"
                  >
                    Confirmer
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}