"use client";

import { useParams } from "next/navigation";
import lista from "@/app/data/caracteristicas.json";
import Link from "next/link";

export default function CaracteristicaPage() {
  const { id } = useParams();
  const index = Number(id);
  const texto = lista[index];

  if (!texto) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Característica não encontrada</h2>
        <Link
          href="/caracteristicas"
          className="bg-blue-500 px-4 py-2 rounded text-white shadow"
        >
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold text-center">{texto}</h2>

      <Link
        href="/caracteristicas"
        className="bg-blue-500 px-4 py-2 rounded text-white shadow"
      >
        Voltar
      </Link>
    </div>
  );
}
