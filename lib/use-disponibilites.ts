"use client";

import { useEffect, useState } from "react";

type ReponseDisponibilites = {
  configure: boolean;
  disponibilites: Record<string, boolean>;
};

export function useDisponibilites() {
  const [configure, setConfigure] = useState(false);
  const [charge, setCharge] = useState(false);
  const [disponibilites, setDisponibilites] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const controleur = new AbortController();
    fetch("/api/disponibilites", { signal: controleur.signal })
      .then(async (reponse) => {
        const resultat = (await reponse.json()) as ReponseDisponibilites;
        if (!reponse.ok) throw new Error();
        setConfigure(resultat.configure);
        setDisponibilites(resultat.disponibilites);
      })
      .catch(() => {
        if (!controleur.signal.aborted) {
          setConfigure(true);
          setDisponibilites({});
        }
      })
      .finally(() => {
        if (!controleur.signal.aborted) setCharge(true);
      });
    return () => controleur.abort();
  }, []);

  const estDisponible = (variantKey: string) => !configure || disponibilites[variantKey] === true;
  return { configure, charge, estDisponible };
}
