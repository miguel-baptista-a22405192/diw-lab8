"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/app/models/interfaces";
import { isFavorito, toggleFavorito } from "@/app/utils/favoritos";

export default function ProdutoDetalhe({ produto }: { produto: Product }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(isFavorito(produto.id));
  }, [produto.id]);

  const toggle = () => {
    toggleFavorito(produto);
    setFav((prev) => !prev);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center relative">

      <button
        onClick={toggle}
        className="absolute top-4 right-4 text-2xl"
      >
        {fav ? "❤️" : "🤍"}
      </button>

      <h1 className="text-3xl font-bold mb-4">{produto.title}</h1>

      <Image
        src={produto.image}
        width={300}
        height={300}
        alt={produto.title}
        className="mx-auto rounded-xl mb-6 object-contain bg-white/10 p-4"
      />

      <p className="opacity-80 mb-4">{produto.description}</p>

      <p className="text-green-400 text-xl font-bold mb-2">
        {produto.price} €
      </p>

      <p className="text-yellow-400 mb-6">
        ⭐ {produto.rating.rate}
      </p>

      <Link
        href="/produtos"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Voltar
      </Link>
    </div>
  );
}
