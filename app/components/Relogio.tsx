"use client";

import { useEffect, useState } from "react";

export default function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono">
      {hora.toLocaleTimeString("pt-PT")}
    </span>
  );
}
