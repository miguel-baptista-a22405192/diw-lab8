"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const API = "https://deisishop.pythonanywhere.com";

export default function CategoriaPage() {
  const { nome } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`${API}/products/`)
      .then((res) => res.json())
      .then((data) =>
        setProdutos(data.filter((p: any) => p.category === nome))
      );
  }, [nome]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        Categoria: {nome}
      </h1>

      <Link
        href="/categorias"
        className="underline text-blue-400 block mb-6 text-center"
      >
        Voltar
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {produtos.map((p: any) => (
          <Link
            href={`/produtos/${p.id}`}
            key={p.id}
            className="bg-white/10 p-4 rounded-xl shadow hover:bg-white/20"
          >
            <img
              src={p.image}
              className="w-24 h-24 mx-auto object-contain"
            />
            <h2 className="font-semibold text-center mt-2">{p.title}</h2>
            <p className="text-green-300 text-center">{p.price} €</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
