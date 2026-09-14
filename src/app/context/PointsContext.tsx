"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type PointsContextType = {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
};

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export function PointsProvider({ children }: { children: ReactNode }) {
  const [points, setPoints] = useState(480);
  return (
    <PointsContext.Provider value={{ points, setPoints }}>
      {children}
    </PointsContext.Provider>
  );
}

export function usePoints() {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error("usePoints doit être utilisé à l'intérieur d'un PointsProvider");
  }
  return context;
}