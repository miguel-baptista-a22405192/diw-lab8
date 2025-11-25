"use client";

import Image from "next/image";

export interface TecnologiaProps {
  title: string;
  image: string;
}

export default function TecnologiaCard({ title, image }: TecnologiaProps) {
  return (
    <div className="bg-white/10 w-44 h-48 rounded-xl p-4 shadow flex flex-col items-center justify-center">
      <Image
        src={`/tecnologias/${image}`}
        alt={title}
        width={70}
        height={70}
      />
      <h3 className="font-medium mt-3 text-center">{title}</h3>
    </div>
  );
}
