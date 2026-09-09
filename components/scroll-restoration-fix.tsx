"use client";

// Empeche le navigateur de restaurer l'ancienne position de scroll a l'actualisation
// (probleme mobile : on rechargeait la page d'accueil et on voyait le bas du Hero).
import { useEffect } from "react";

export function ScrollRestorationFix() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
