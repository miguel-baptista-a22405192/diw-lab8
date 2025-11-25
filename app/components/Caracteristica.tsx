"use client";

import Link from "next/link";

export interface CaracteristicaProps {
  texto: string;
  index: number;
}

export default function Caracteristica({ texto, index }: CaracteristicaProps) {
  return (
    <Link
      href={`/caracteristica/${index}`}
      className="bg-white/10 block p-4 rounded-xl shadow hover:bg-white/20 transition"
    >
      <p className="font-semibold text-center">{texto}</p>
    </Link>
  );
}
