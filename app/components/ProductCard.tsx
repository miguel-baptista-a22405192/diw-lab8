"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "@/app/models/interfaces";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favoritos");
    if (!stored) return;

    const favoritos: Product[] = JSON.parse(stored);
    setFav(favoritos.some((p) => p.id === product.id));
  }, [product.id]);

  const toggleFavorito = () => {
    const stored = localStorage.getItem("favoritos");
    const favoritos: Product[] = stored ? JSON.parse(stored) : [];

    let updated: Product[];

    if (favoritos.some((p) => p.id === product.id)) {
      updated = favoritos.filter((p) => p.id !== product.id);
      setFav(false);
    } else {
      updated = [...favoritos, product];
      setFav(true);
    }

    localStorage.setItem("favoritos", JSON.stringify(updated));
  };

  return (
    <div className="bg-white/10 p-4 rounded-xl shadow flex flex-col items-center">
      <Image
        src={product.image}
        width={120}
        height={120}
        alt={product.title}
        className="rounded mb-2"
      />

      <h2 className="font-semibold text-center">{product.title}</h2>

      <p className="text-green-400 font-bold text-center">
        {product.price} €
      </p>

      <div className="flex items-center gap-3 mt-2">
        <Link
          href={`/produtos/${product.id}`}
          className="text-blue-400 underline text-sm"
        >
          + info
        </Link>

        <button onClick={toggleFavorito} className="text-xl">
          {fav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
