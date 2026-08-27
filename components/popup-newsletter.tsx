"use client";

// Pop-up newsletter "-10% sur la premiere commande" (retour Tom). Style du site : noir/or,
// cadre a coins dores, serif Cinzel. Apparait 5s apres l'arrivee, A CHAQUE actualisation
// (pas de memorisation, retour Tom v21), fermable (croix, "Non merci", clic sur le voile).
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { IconFermer } from "./icons";
import { useNewsletter } from "./use-newsletter";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

function CadreCoins() {
  const coin = "absolute h-5 w-5 border-[#D4B36A]";
  return (
    <span className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      <span className={`${coin} left-3 top-3 border-l-2 border-t-2`} />
      <span className={`${coin} right-3 top-3 border-r-2 border-t-2`} />
      <span className={`${coin} bottom-3 left-3 border-b-2 border-l-2`} />
      <span className={`${coin} bottom-3 right-3 border-b-2 border-r-2`} />
    </span>
  );
}

export function PopupNewsletter() {
  const [ouvert, setOuvert] = useState(false);
  const { statut, message, inscrire } = useNewsletter();
  const reduce = useReducedMotion();

  // Retour Tom v21 : la pop-up se relance a CHAQUE actualisation (pas de memorisation).
  useEffect(() => {
    const t = setTimeout(() => setOuvert(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const fermer = () => {
    setOuvert(false);
  };

  return (
    <AnimatePresence>
      {ouvert && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* voile sombre cliquable pour fermer */}
          <div className="absolute inset-0 bg-[#0A0908]/75 backdrop-blur-sm" onClick={fermer} aria-hidden="true" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Offre newsletter"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.92, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduce ? 1 : 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: EASE_LUXE }}
            className="relative w-full max-w-md overflow-hidden border border-[#D4B36A]/40 bg-[#0A0908] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          >
            {/* fond texture broderie or, tres discret */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{ backgroundImage: "url(/img/fond-broderie.webp)" }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#0A0908]/60" aria-hidden="true" />
            <CadreCoins />

            <button
              onClick={fermer}
              aria-label="Fermer"
              className="absolute right-4 top-4 z-20 text-xl text-[#F5F1E8]/70 transition-colors hover:text-[#E3C888]"
            >
              <IconFermer />
            </button>

            <div className="relative z-10 px-8 py-11 text-center">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#E3C888]">Offre de bienvenue</p>
              <p className="font-display mt-5 text-[clamp(3rem,12vw,4.2rem)] font-semibold leading-none text-[#E3C888]">
                -10%
              </p>
              <h2 className="font-display mt-3 text-[1.4rem] leading-tight text-[#F5F1E8]">
                sur ta première commande
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-[0.85rem] leading-relaxed text-white/85">
                Rejoins la tribu. Inscris-toi à la newsletter et reçois ton code
                de réduction, plus les annonces des séries limitées.
              </p>

              {statut === "ok" ? (
                <p className="mt-7 text-[0.9rem] font-semibold text-[#E3C888]">
                  {message}
                </p>
              ) : (
                <form
                  onSubmit={inscrire}
                  className="mt-7"
                >
                  <label htmlFor="popup-email" className="sr-only">
                    Ton adresse e-mail
                  </label>
                  <input
                    id="popup-email"
                    name="email"
                    type="email"
                    required
                    disabled={statut === "envoi"}
                    placeholder="erick@exemple.fr"
                    className="w-full border border-[#F5F1E8]/30 bg-[#14120E] px-4 py-3.5 text-center text-[0.9rem] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 focus:border-[#D4B36A] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="btn-cut mt-3 w-full bg-[#D4B36A] px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#0A0908] transition-colors hover:bg-[#E3C888]"
                  >
                    {statut === "envoi" ? "Inscription…" : "Je reçois mes -10%"}
                  </button>
                  {statut === "erreur" && <p className="mt-3 text-[0.76rem] text-[#ff9a9a]" role="alert">{message}</p>}
                </form>
              )}

              <button
                onClick={fermer}
                className="mt-4 text-[0.68rem] uppercase tracking-[0.14em] text-[#F5F1E8]/50 transition-colors hover:text-[#F5F1E8]/80"
              >
                Non merci
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
