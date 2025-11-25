"use client";

import Caracteristica from "@/app/components/Caracteristica";

export default function CaracteristicasPage() {
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

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Características</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {caracteristicas.map((c, i) => (
          <Caracteristica key={i} texto={c} index={i} />
        ))}
      </div>
    </div>
  );
}
