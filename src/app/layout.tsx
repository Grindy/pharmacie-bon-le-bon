import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Le-Miel-sur-Quévillon",
  description: "Miel et produits de la ruche de Le-Miel-sur-Quévillon",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}