"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API = "https://deisishop.pythonanywhere.com";

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`${API}/products`)
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Produtos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {produtos.map((p: any) => (
          <Link
            href={`/produtos/${p.id}`}
            key={p.id}
            className="bg-white/10 p-4 rounded-xl shadow flex gap-4 hover:bg-white/20"
          >
            <img src={p.image} className="w-24 h-24 rounded-lg" />

            <div>
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm">{p.category}</p>
              <p className="text-yellow-300">⭐ {p.rating.rate}</p>
              <p className="text-green-400 font-bold">{p.price} €</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
