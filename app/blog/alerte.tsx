"use client";

// Encart newsletter dedie aux articles de blog, calque sur la maquette client : deux
// colonnes separees par une ligne a losange, illustration soleil levant a gauche.
import { IconEmail, IconCoche } from "@/components/icons";
import { useNewsletter } from "@/components/use-newsletter";

export function AlerteArticles() {
  const { statut, message, inscrire } = useNewsletter();

  return (
    <div className="relative mx-auto mt-16 max-w-4xl border border-[#D4B36A]/30 bg-[#0A0908]">
      <div className="grid md:grid-cols-2">
        {/* Colonne gauche : message + illustration */}
        <div className="relative flex flex-col justify-between overflow-hidden border-b border-[#D4B36A]/25 px-8 py-10 text-center md:border-b-0 md:border-r md:px-10 md:py-12 md:text-left">
          <div>
            <span className="flex items-center justify-center gap-3 md:justify-start" aria-hidden="true">
              <span className="text-[0.9rem] text-[#D4B36A]">✦</span>
            </span>
            <h2 className="font-display mt-5 text-[1.6rem] leading-tight text-[#F5F1E8] md:text-[1.9rem]">
              Sois le premier informé
            </h2>
            <p className="mx-auto mt-5 max-w-xs text-[0.9rem] leading-relaxed text-[#F5F1E8]/72 md:mx-0">
              Dès qu&apos;un nouveau récit est publié, tu le sais avant tout le monde. Un
              mail par article, jamais plus.
            </p>
          </div>

          {/* Illustration soleil levant, decorative */}
          <svg
            viewBox="0 0 200 90"
            className="mx-auto mt-10 h-16 w-full max-w-xs text-[#B8925A]/45 md:mx-0"
            aria-hidden="true"
          >
            <path d="M20 80 L38 55 M40 74 L52 52 M60 70 L67 48 M80 68 L83 46 M100 67 L100 44 M120 68 L117 46 M140 70 L133 48 M160 74 L148 52 M180 80 L162 55" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M30 80 A70 70 0 0 1 170 80" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <line x1="10" y1="80" x2="190" y2="80" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Colonne droite : formulaire */}
        <div className="relative flex flex-col justify-center px-8 py-10 text-center md:px-10 md:py-12">
          {/* Losange sur la ligne de separation, desktop uniquement */}
          <span
            className="pointer-events-none absolute -left-[7px] top-1/2 hidden h-3.5 w-3.5 -translate-y-1/2 rotate-45 border border-[#D4B36A] bg-[#0A0908] md:block"
            aria-hidden="true"
          />

          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D4B36A]/50 text-xl text-[#D4B36A]" aria-hidden="true">
            <IconEmail />
          </span>
          <span className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#D4B36A]">
              Reçois chaque nouveau récit
            </span>
          </span>

          {statut === "ok" ? (
            <p className="mt-8 text-[0.9rem] font-semibold text-[#E3C888]">
              {message}
            </p>
          ) : (
            <form
              onSubmit={inscrire}
              className="mx-auto mt-7 w-full max-w-sm"
            >
              <label htmlFor="email-blog" className="sr-only">
                Ton adresse e-mail
              </label>
              <div className="flex items-center gap-3 border border-[#F5F1E8]/25 bg-[#14120E] px-4 py-3.5 focus-within:border-[#D4B36A]">
                <span className="text-[#D4B36A]" aria-hidden="true">
                  <IconEmail />
                </span>
                <input
                  id="email-blog"
                  name="email"
                  type="email"
                  required
                  disabled={statut === "envoi"}
                  placeholder="erick@exemple.fr"
                  className="w-full bg-transparent text-[0.9rem] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="btn-cut mt-4 w-full bg-[#D4B36A] px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#0A0908] transition-colors hover:bg-[#E3C888]"
              >
                {statut === "envoi" ? "Inscription…" : "M'alerter"}
              </button>
              {statut === "erreur" && <p className="mt-3 text-[0.76rem] text-[#ff9a9a]" role="alert">{message}</p>}
              <p className="mt-4 flex items-center justify-center gap-2 text-[0.76rem] text-[#F5F1E8]/60">
                <span className="text-[#D4B36A]"><IconCoche /></span>
                Aucun spam. Désinscription en un clic.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
