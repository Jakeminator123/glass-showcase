import { GlassChat } from "@/components/glass-chat";
import { SAJTMASKIN_BUILDER_URL } from "@/lib/site";

const img = {
  hero: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=1600&q=80",
  cone: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1200&q=80",
  party: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
  scoop: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=1200&q=80",
  street: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
};

const reasons = [
  {
    title: "Nära leken",
    body: "Originalet pekade ut radiobilarna i Palma. Här är det en tänkt kiosk vid en tänkt nöjesyta — inte en adress du kan gå till.",
  },
  {
    title: "Personlig, inte kedja",
    body: "Tre värdar som hälsar. I revivalen är de figurer i ett exempel, inte personer du kan mejla.",
  },
  {
    title: "Enkelt att välja",
    body: "Fruktigt, klassiskt, barnfavorit. Inga priser, inga smaker som påstås finnas i lager.",
  },
];

const faqs = [
  {
    q: "Har ni alternativ som passar barn?",
    a: "I ett riktigt stånd skulle det vara små strutstorlekar och lena smaker. Den här sidan säljer inget.",
  },
  {
    q: "Hur hittar vi er lättast?",
    a: "Ni gör inte det. Platsen i originalet är en stämning, inte en verifierad kiosk.",
  },
  {
    q: "Kan vi kontakta er för en större grupp?",
    a: "Nej. Kontaktformuläret skickar ingenstans och mejladressen från originalet är borttagen.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[var(--ink)]/8 bg-[var(--cream)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="display text-lg text-[var(--berry)]">
            Radiobilsglassar
          </a>
          <nav className="hidden gap-5 text-sm text-[var(--slate)] md:flex">
            <a href="#varfor">Varför oss</a>
            <a href="#om">Om oss</a>
            <a href="#galleri">Galleri</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a
            href="#kiosk"
            className="rounded-full bg-[var(--berry)] px-3 py-2 text-xs font-medium text-white sm:text-sm"
          >
            Se kiosken
          </a>
        </div>
        <nav className="flex gap-4 overflow-x-auto px-4 pb-2 text-xs text-[var(--slate)] md:hidden">
          <a href="#varfor">Varför</a>
          <a href="#om">Om</a>
          <a href="#galleri">Galleri</a>
          <a href="#chatt">Chatt</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-[1.05fr_0.95fr] sm:px-6 sm:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cocoa)]">
              Exempel: lokal glasskiosk
            </p>
            <h1 className="display mt-3 text-4xl leading-[1.05] sm:text-6xl">
              Solig paus, kall glass, varma leenden.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--slate)]">
              En tänkt kiosk för barnfamiljer och förbipasserande. Originalet såg ut som
              ett riktigt stånd i Palma. Revivalen behåller värmen, men släpper mejl,
              årtal och “1000+ glassar”.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#galleri"
                className="rounded-full bg-[var(--lemon)] px-5 py-3 text-center text-sm font-semibold text-[var(--ink)]"
              >
                Se känslan
              </a>
              <a
                href="#chatt"
                className="rounded-full border-2 border-[var(--ink)]/15 px-5 py-3 text-center text-sm"
              >
                Testa exempel-boten
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.hero}
            alt=""
            className="scoop-shadow h-80 w-full rounded-[2.4rem] object-cover sm:h-[28rem]"
          />
        </section>

        <section className="mx-auto grid max-w-6xl gap-3 px-4 pb-6 sm:grid-cols-3 sm:px-6">
          {[
            ["Stämning", "semester · skratt · färg"],
            ["Sällskap", "barn, vuxna, förbipasserande"],
            ["Löfte i originalet", "omskrivet till exempel, inte sanning"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-[1.6rem] bg-white p-5 ring-1 ring-[var(--ink)]/8">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--berry)]">{k}</p>
              <p className="mt-2 text-lg">{v}</p>
            </div>
          ))}
        </section>

        <section id="varfor" className="scroll-mt-24 bg-[var(--custard)] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--cocoa)]">
              Varför köpa glass från oss?
            </p>
            <h2 className="display mt-3 max-w-2xl text-3xl sm:text-5xl">
              Vi gör det lätt att säga ja till en glass till.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--slate)]">
              Tre skäl, utan “två somrar av glada gäster”. Inga besökssiffror.
            </p>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {reasons.map((item) => (
                <article key={item.title} className="scoop-shadow rounded-[1.8rem] bg-white p-6">
                  <h3 className="display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--slate)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="om" className="scroll-mt-24 mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--cocoa)]">Vilka är vi?</p>
            <h2 className="display mt-3 text-3xl sm:text-5xl">Tre värdar i ett exempel, inte tre mejladresser.</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--slate)]">
              Idéen är enkel: en god glass ska vara snabb att få och serverad med bra
              energi. Originalets personliga mejl är borttagen. Här finns ingen Jakob
              att skriva till.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-6">
              <li className="rounded-2xl bg-white px-4 py-3 ring-1 ring-[var(--ink)]/8">
                Snabb service även när kön ser lång ut — som mönster, inte som SLA.
              </li>
              <li className="rounded-2xl bg-white px-4 py-3 ring-1 ring-[var(--ink)]/8">
                Iskalla strutar tänkta för eftermiddagsvärme.
              </li>
              <li className="rounded-2xl bg-white px-4 py-3 ring-1 ring-[var(--ink)]/8">
                Vänligt bemötande för barn och vuxna.
              </li>
            </ul>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.party} alt="" className="h-full min-h-72 w-full rounded-[2rem] object-cover" />
        </section>

        <section id="galleri" className="scroll-mt-24 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--cocoa)]">
              Känslan hos oss
            </p>
            <h2 className="display mt-3 text-3xl sm:text-5xl">Semester, skratt och färgglad glass.</h2>
            <p className="mt-4 max-w-2xl text-sm text-[var(--slate)]">
              Samma Unsplash-register som originalet. Inga egna foton från en specifik kiosk.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[img.cone, img.scoop, img.street, img.hero].map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="" className="h-56 w-full rounded-[1.6rem] object-cover" />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--cocoa)]">Snabba svar</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">Innan du letar efter oss</h2>
          <div className="mt-8 divide-y divide-[var(--ink)]/10">
            {faqs.map((item) => (
              <details key={item.q} className="py-4">
                <summary className="cursor-pointer text-lg font-medium">{item.q}</summary>
                <p className="mt-2 text-sm leading-6 text-[var(--slate)]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="chatt" className="scroll-mt-24 bg-[var(--sky)]/15 py-16">
          <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 lg:grid-cols-2 sm:px-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--cocoa)]">
                Glass-chatt
              </p>
              <h2 className="display mt-3 text-3xl sm:text-5xl">Fråga om strut och topping — lokalt.</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--slate)]">
                Layouten från originalet är kvar. Integrationen är det inte. Inget
                “OpenAI-klar”, inget preview-demo som låtsas vara en produkt.
              </p>
            </div>
            <GlassChat />
          </div>
        </section>

        <section id="kontakt" className="scroll-mt-24 mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--cocoa)]">Kontakt</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">Ingen mejl. Ingen blankett som skickar.</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--slate)]">
            Originalet hade `jakob@dg97.se` och ett formulär som såg levande ut. Här
            står strukturen kvar som illustration: namn, ämne, meddelande — utan action.
          </p>
          <div className="scoop-shadow mt-8 space-y-3 rounded-[1.8rem] bg-white p-6">
            <label className="block text-sm">
              Namn
              <input disabled className="mt-1 w-full rounded-2xl bg-[var(--cream)] px-4 py-3" placeholder="Visas bara" />
            </label>
            <label className="block text-sm">
              Ämne
              <input disabled className="mt-1 w-full rounded-2xl bg-[var(--cream)] px-4 py-3" placeholder="Skickas inte" />
            </label>
            <label className="block text-sm">
              Meddelande
              <textarea disabled rows={4} className="mt-1 w-full rounded-2xl bg-[var(--cream)] px-4 py-3" placeholder="Ingen inkorg bakom" />
            </label>
            <p className="rounded-2xl bg-[var(--custard)] px-4 py-3 text-sm text-[var(--cocoa)]">
              Formuläret är avstängt med flit. Vill du ha en riktig kontaktsida, bygg den
              för ditt eget stånd.
            </p>
          </div>
        </section>

        <section id="kiosk" className="bg-[var(--berry)] px-4 py-16 text-center text-white sm:px-6">
          <h2 className="display mx-auto max-w-3xl text-3xl sm:text-5xl">
            Har du ett lokalt företag?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85">
            Skapa en egen sida med öppettider, tjänster, bilder och kontaktväg i
            Sajtmaskin. Den här kiosken är en återskapad showcase — källkoden fanns inte.
          </p>
          <a
            href={SAJTMASKIN_BUILDER_URL}
            className="mt-7 inline-block rounded-full bg-[var(--lemon)] px-6 py-3 text-sm font-semibold text-[var(--ink)]"
          >
            Skapa en egen sida i Sajtmaskin
          </a>
        </section>
      </main>

      <footer className="bg-[var(--cream)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-[var(--slate)]">
            Palma Radiobilsglassar är ett exempelprojekt. Ingen kiosk, ingen mejl, ingen kö.
          </p>
          <a href={SAJTMASKIN_BUILDER_URL} className="text-sm text-[var(--berry)] underline-offset-4 hover:underline">
            Baserad på ett exempel skapat med Sajtmaskin · Skapa din egen
          </a>
        </div>
      </footer>
    </>
  );
}
