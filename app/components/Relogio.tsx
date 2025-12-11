"use client";

import { useEffect, useState } from "react";

export default function Relogio() {
  const [hora, setHora] = useState<Date | null>(null);

  useEffect(() => {
    setHora(new Date());

    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!hora) return null; 

  return (
    <span className="font-mono">{hora.toLocaleTimeString("pt-PT")}</span>
  );
}
