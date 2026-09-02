"use client";

// INSPIRATION: maquette client (formulaire + carte de contact en deux colonnes).
import { useState } from "react";
import { Cta, Kicker } from "@/components/cta";
import { IconEmail, IconHorloge } from "@/components/icons";

const champCls =
  "w-full border border-[#191610]/25 bg-white px-4 py-3.5 text-[0.9rem] placeholder:text-[#191610]/40 focus:border-[#9C7E32] focus:outline-none";
const labelCls = "block text-[0.68rem] uppercase tracking-[0.18em] text-[#191610]/65";

export default function Contact() {
  const [statut, setStatut] = useState<"idle" | "envoi" | "ok" | "erreur">("idle");

  const envoyer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatut("envoi");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.get("nom"),
          prenom: form.get("prenom"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatut("ok");
      e.currentTarget.reset();
    } catch {
      setStatut("erreur");
    }
  };

  return (
    <main className="bg-[#F0EAE0] px-6 pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Kicker>Contacte-nous</Kicker>
          <h1 className="font-display mt-3 text-[clamp(2.1rem,4.5vw,3.2rem)] text-[#191610]">
            On est à ton écoute
          </h1>
          <span className="mx-auto mt-5 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-1.5 w-1.5 rotate-45 border border-[#B8925A]" />
          </span>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Formulaire */}
          {statut === "ok" ? (
            <div className="border border-[#191610]/20 bg-[#E5DCC9]/70 p-10 text-center">
              <p className="font-display text-xl">Message envoyé.</p>
              <p className="mt-3 text-[0.9rem] text-[#191610]/70">On te répond sous 48 h à l&apos;adresse indiquée.</p>
            </div>
          ) : (
            <form onSubmit={envoyer} className="space-y-5 border border-[#191610]/20 bg-[#E5DCC9]/70 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nom" className={labelCls}>Nom</label>
                  <input id="nom" name="nom" type="text" required placeholder="Dupont" className={`mt-2 ${champCls}`} />
                </div>
                <div>
                  <label htmlFor="prenom" className={labelCls}>Prénom</label>
                  <input id="prenom" name="prenom" type="text" required placeholder="Xavier" className={`mt-2 ${champCls}`} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>Adresse e-mail</label>
                <input id="email" name="email" type="email" required placeholder="xavier@exemple.fr" className={`mt-2 ${champCls}`} />
              </div>
              <div>
                <label htmlFor="message" className={labelCls}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Bonjour, je souhaite savoir si le tee-shirt La Yole revient en taille XL..."
                  className={`mt-2 ${champCls}`}
                />
              </div>
              <div className="text-center">
                <Cta type="submit" variante="noir" disabled={statut === "envoi"}>
                  {statut === "envoi" ? "Envoi en cours..." : "Envoyer le message"}
                </Cta>
                {statut === "erreur" ? (
                  <p className="mt-3 text-[0.72rem] text-[#C8202E]" role="alert">
                    L&apos;envoi a échoué. Écris-nous directement à uncommonpeopletribe@gmail.com.
                  </p>
                ) : (
                  <p className="mt-3 text-[0.72rem] text-[#191610]/55">Réponse sous 48 h.</p>
                )}
              </div>
            </form>
          )}

          {/* Carte de contact */}
          <div className="relative flex flex-col border border-[#191610]/20 bg-[#E5DCC9]/40 p-8">
            <div className="text-center">
              <p className="font-display text-2xl text-[#9C7E32]">UP</p>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#191610]/60">
                Uncommon People Tribe
              </p>
              <p className="text-[0.55rem] uppercase tracking-[0.2em] text-[#191610]/45">
                West Indian Excellence
              </p>
              <span className="mx-auto mt-4 flex items-center justify-center gap-2" aria-hidden="true">
                <span className="h-1.5 w-1.5 rotate-45 border border-[#B8925A]" />
              </span>
            </div>

            <p className="font-display mt-6 text-center text-[1.1rem] leading-snug text-[#191610]">
              Une question sur une pièce, une taille ou une commande ?
            </p>
            <p className="mt-4 text-center text-[0.85rem] leading-relaxed text-[#191610]/70">
              On te répond avec attention, sous 48 heures.
            </p>

            <div className="mt-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B8925A]/50 text-[#9C7E32]">
                  <IconEmail />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#191610]/55">E-mail</p>
                  <a href="mailto:uncommonpeopletribe@gmail.com" className="text-[0.85rem] text-[#191610] hover:text-[#9C7E32]">
                    uncommonpeopletribe@gmail.com
                  </a>
                </div>
              </div>
              <span className="block h-px bg-[#191610]/12" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B8925A]/50 text-[#9C7E32]">
                  <IconHorloge />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#191610]/55">Réponse sous 48 h</p>
                  <p className="text-[0.85rem] text-[#191610]">On revient vers toi rapidement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
