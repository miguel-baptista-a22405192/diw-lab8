"use client";

import Image from "next/image";
import Link from "next/link";
import tecnologias from "@/app/data/tecnologias.json";

import TecnologiaCard from "@/app/components/TecnologiaCard";

export default function TecnologiasPage() {
  const lista = JSON.parse(JSON.stringify(tecnologias));

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Tecnologias Exploradas</h2>

      {}
      <div className="flex gap-4 flex-wrap mb-10">
        {lista.map((tec: any, i: number) => (
          <TecnologiaCard
            key={i}
            title={tec.title}
            image={tec.image}
          />
        ))}
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lista.map((tec: any, i: number) => (
          <Link
            key={i}
            href={`/tecnologia/${i}`}
            className="bg-white/10 p-4 rounded-xl shadow flex items-center gap-4"
          >
            <Image
              src={`/tecnologias/${tec.image}`}
              alt={`Logotipo de ${tec.title}`}
              width={120}
              height={120}
            />

            <div>
              <h3 className="font-semibold text-lg">{tec.title}</h3>
              <p className="text-sm">{tec.description}</p>
              <p className="text-yellow-400 mt-1">⭐ {tec.rating}/5</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
