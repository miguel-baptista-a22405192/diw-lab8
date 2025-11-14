"use client";

export default function Page() {

  const caracteristicas = [
    "JSX, sintaxe que mistura HTML e JS.",
    "Componentes, funções que retornam JSX.",
    "Componentes Reutilizáveis e Modulares.",
    "Roteamento Automático e APIs.",
    "Hooks: useState, useEffect e useSWR.",
    "Renderização Rápida e SEO Friendly.",
    "TypeScript Seguro e Escalável.",
    "Comunidade Ativa e Popularidade."
  ];

  function clicar() {
    alert("Ola!!!!!");
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Características do React e Next.js
      </h2>

      <ul className="list-disc pl-6 space-y-1">
        {caracteristicas.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <button
        onClick={clicar}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Clica aqui
      </button>
    </div>
  );
}
