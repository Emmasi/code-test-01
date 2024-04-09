'use client'
import Pokemon from "./components/pokemon";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="card flex flex-col">
        <Pokemon />
      </div>
    </main>
  );
}
