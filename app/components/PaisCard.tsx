interface Pais {
  name: {
    common: string;
  };
  area: number;
  population: number;
}

export default function PaisCard({ pais }: { pais: Pais }) {
  return (
    <div className="bg-white/10 p-4 rounded-xl text-center">
      <h2 className="font-bold text-lg mb-2">{pais.name.common}</h2>
      <p>Área: {pais.area} km²</p>
      <p>População: {pais.population}</p>
    </div>
  );
}
