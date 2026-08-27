"use client";

import { useState } from "react";

type Statut = "idle" | "envoi" | "ok" | "erreur";

export function useNewsletter() {
  const [statut, setStatut] = useState<Statut>("idle");
  const [message, setMessage] = useState("");

  const inscrire = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatut("envoi");
    setMessage("");
    const formulaire = event.currentTarget;
    const donnees = new FormData(formulaire);
    const email = donnees.get("email");

    try {
      const reponse = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const resultat = (await reponse.json()) as { erreur?: string; codeEnvoye?: boolean };
      if (!reponse.ok) throw new Error(resultat.erreur || "L’inscription a échoué.");
      formulaire.reset();
      setStatut("ok");
      setMessage(
        resultat.codeEnvoye
          ? "Merci ! Ton code de bienvenue vient de partir par e-mail."
          : "Merci ! Ton inscription à la tribu est bien enregistrée."
      );
    } catch (erreur) {
      setStatut("erreur");
      setMessage(erreur instanceof Error ? erreur.message : "L’inscription a échoué.");
    }
  };

  return { statut, message, inscrire };
}
