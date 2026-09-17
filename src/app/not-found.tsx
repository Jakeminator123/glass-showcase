import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-5 py-28 text-center">
      <p className="display text-6xl text-[var(--berry)]">404</p>
      <h1 className="display mt-3 text-3xl">Den här struten är slut</h1>
      <p className="mt-3 text-sm text-[var(--slate)]">
        Radiobilsglassar är ett exempelprojekt med en landningssida. Inget mer bakom hörnet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-[var(--berry)] px-5 py-3 text-sm font-medium text-white"
      >
        Tillbaka till kiosken
      </Link>
    </div>
  );
}
