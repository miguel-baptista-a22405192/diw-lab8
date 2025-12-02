"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API = "https://deisishop.pythonanywhere.com";

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(`${API}/categories/`)
      .then((res) => res.json())
      .then((data) => setCategorias(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Categorias</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categorias.map((cat: string) => (
          <Link
            key={cat}
            href={`/categorias/${cat}`}
            className="bg-white/10 p-4 rounded-xl shadow hover:bg-white/20 text-center"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}
