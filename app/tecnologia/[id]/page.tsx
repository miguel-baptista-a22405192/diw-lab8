"use client";

import { useParams } from "next/navigation";
import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaDetailsCard from "@/app/components/TecnologiaDetailsCard";

export default function TecnologiaPage() {
  const { id } = useParams();
  const index = Number(id);

  const tec = tecnologias[index];

  if (!tec) return <p>Tecnologia não encontrada.</p>;

  return (
    <div className="p-6">
      <TecnologiaDetailsCard
        title={tec.title}
        image={tec.image}
        description={tec.description}
        rating={tec.rating}
      />
    </div>
  );
}
