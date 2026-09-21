"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./accueil/page";
import Abeilles from "./abeilles/page";
import Produits from "./produits/page";

type Page = "accueil" | "produits" | "abeilles";

export default function Home() {
  // La page affichée en ce moment
  const [page, setPage] = useState<Page>("accueil");

  return (
    <div className="app">
      <Header pageActive={page} onNavigate={setPage} />

      <main className="contenu">
        {page === "accueil" && <Accueil onNavigate={setPage} />}
        {page === "produits" && <Produits/>}
        {page === "abeilles" && <Abeilles />}
      </main>

      <Footer />
    </div>
  );
}