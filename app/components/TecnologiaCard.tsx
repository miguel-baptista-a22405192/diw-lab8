"use client";

import Image from "next/image";
import ContadorPersonalizado from "@/app/components/ContadorPersonalizado";

export interface TecnologiaProps {
  title: string;
  image: string;
}

export default function TecnologiaCard({ title, image }: TecnologiaProps) {
  return (
    <div className="bg-white/10 w-44 h-52 rounded-xl p-4 shadow flex flex-col items-center justify-between">
      
      <Image
        src={`/tecnologias/${image}`}
        alt={title}
        width={70}
        height={70}
      />

      <h3 className="font-medium text-center">{title}</h3>

      {/* Contador de likes */}
      <ContadorPersonalizado title={title} />
    </div>
  );
}
