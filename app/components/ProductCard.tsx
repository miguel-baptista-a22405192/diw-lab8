"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/models/interfaces";

const API = "https://deisishop.pythonanywhere.com";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white/10 p-4 rounded-xl shadow flex flex-col items-center">

      <div className="w-full h-48 flex items-center justify-center mb-3 bg-white/5 rounded-lg">
        <Image
          src={`${API}${product.image}`}
          alt={product.title}
          width={160}
          height={160}
          className="object-contain max-h-full"
        />
      </div>

      <h2 className="font-semibold text-center mb-2">
        {product.title}
      </h2>

      <p className="text-green-400 font-bold mb-3">
        {product.price} €
      </p>

      <Link
        href={`/produtos/${product.id}`}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
      >
        + Info
      </Link>
    </div>
  );
}
