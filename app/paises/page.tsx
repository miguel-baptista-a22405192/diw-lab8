"use client";

import { useEffect, useState } from "react";
import PaisCard from "@/app/components/PaisCard";

interface Pais {
  name: {
    common: string;
  };
  area: number;
  population: number;
}

export default function PaisesPage() {
  const [paises, setPaises] = useState<Pais[]>([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("none");

  useEffect(() => {
    fetch("/paises.json")
      .then((res) => res.json())
      .then(setPaises);
  }, []);

  const resultado = [...paises]
    .filter((p) =>
      p.name.common.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (order === "pop-asc") return a.population - b.population;
      if (order === "pop-desc") return b.population - a.population;
      return 0;
    });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Países</h1>

      <div className="flex gap-4 mb-6">
        <input
          className="p-2 rounded text-black"
          placeholder="Pesquisar país"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 rounded text-black"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="none">Sem ordenação</option>
          <option value="pop-asc">População crescente</option>
          <option value="pop-desc">População decrescente</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {resultado.map((p) => (
          <PaisCard key={p.name.common} pais={p} />
        ))}
      </div>
    </div>
  );
}
