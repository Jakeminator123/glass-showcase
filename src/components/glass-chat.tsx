"use client";

import { useState } from "react";

const canned: Record<string, string> = {
  "Vilken glass passar i värmen?":
    "I en tänkt kiosk skulle en fruktig sorbet kännas lättare än en tung gräddglass. Det här är ett exempel-svar, inte en meny.",
  "Har ni tips till barn?":
    "Låt barnen peka på färgen de gillar och håll det enkelt. Inga öppettider eller barnmenyer här — sidan är ett mönster.",
  "Vad är skillnaden på sorbet och gräddglass?":
    "Sorbet är frukt och is. Gräddglass är mejeri och luft. Båda kan vara goda. Ingen av dem säljs här.",
};

const prompts = Object.keys(canned);

export function GlassChat() {
  const [log, setLog] = useState<{ from: "bot" | "you"; text: string }[]>([
    {
      from: "bot",
      text: "Hej! Jag är en lokal exempel-bot. Jag svarar med färdiga rader — ingen AI, ingen mejl.",
    },
  ]);
  const [draft, setDraft] = useState("");

  function ask(question: string) {
    const answer =
      canned[question] ??
      "Jag känner bara igen de tre knapparna ovan. Inget skickas någonstans.";
    setLog((prev) => [...prev, { from: "you", text: question }, { from: "bot", text: answer }]);
    setDraft("");
  }

  return (
    <div className="scoop-shadow rounded-[2rem] bg-white p-5 ring-2 ring-[var(--ink)]/8">
      <div className="flex items-center justify-between gap-3">
        <p className="display text-xl">Glassbot</p>
        <span className="rounded-full bg-[var(--custard)] px-3 py-1 text-xs font-medium text-[var(--cocoa)]">
          Lokala exempel-svar · ingen AI
        </span>
      </div>
      <p className="mt-2 text-sm text-[var(--slate)]">
        Originalet antydde en moln-AI. Den här rutan är medvetet offline.
      </p>
      <div className="mt-4 max-h-72 space-y-3 overflow-y-auto rounded-2xl bg-[var(--cream)] p-4">
        {log.map((row, i) => (
          <p
            key={`${row.from}-${i}`}
            className={row.from === "bot" ? "text-sm leading-6" : "text-right text-sm font-medium text-[var(--berry)]"}
          >
            {row.text}
          </p>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {prompts.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => ask(q)}
            className="rounded-full bg-[var(--custard)] px-3 py-2 text-left text-xs text-[var(--ink)]"
          >
            {q}
          </button>
        ))}
      </div>
      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (draft.trim()) ask(draft.trim());
        }}
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Skriv — men bara knapparna har svar"
          className="min-w-0 flex-1 rounded-full border border-[var(--ink)]/15 bg-white px-4 py-2 text-sm"
        />
        <button type="submit" className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm text-white">
          Fråga
        </button>
      </form>
    </div>
  );
}
