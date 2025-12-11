"use client";

import Image from "next/image";
import { Product } from "@/app/models/interfaces";
import Link from "next/link";

const IMG = "https://deisishop.pythonanywhere.com";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white/10 p-4 rounded-xl shadow text-center min-h-[330px] flex flex-col justify-between">

      <div className="w-full h-40 flex items-center justify-center mb-3">
        <Image
          src={IMG + product.image}
          alt={product.title}
          width={160}
          height={160}
          className="object-contain"
        />
      </div>

      <h2 className="font-semibold h-12 flex items-center justify-center text-center">
        {product.title}
      </h2>

      <p className="text-green-400 font-bold">{product.price}€</p>

      <Link
        href={`/produtos/${product.id}`}
        className="mt-3 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        + Info
      </Link>
    </div>
  );
}
