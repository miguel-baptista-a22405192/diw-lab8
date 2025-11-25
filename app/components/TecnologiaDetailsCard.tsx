"use client";

import Image from "next/image";
import Link from "next/link";

interface TecnologiaDetailsProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TecnologiaDetailsCard({
  title,
  image,
  description,
  rating
}: TecnologiaDetailsProps) {
  return (
    <div className="bg-white/10 p-6 rounded-xl shadow max-w-md mx-auto">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={`/tecnologias/${image}`}
          alt={title}
          width={140}
          height={140}
        />

        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="text-sm">{description}</p>

        <p className="text-yellow-400 text-lg">⭐ {rating}/5</p>

        <Link
          href="/tecnologias"
          className="mt-4 bg-blue-500 px-4 py-2 rounded text-white shadow"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
