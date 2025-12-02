"use client";

import { useState , useEffect } from "react";

export default function Contador() {



  const [count , setCount] = useState<number>(0);

  const [history, setHistory] = useState<number[]>([]);

  function corClasse() {
    if (count >= 0 && count <= 3) {
        return "tex-red-500";
    } 
    if (count >= 4 && count <= 7) {
        return "tex-yellow-400"
    }
    if (count >= 8 && count <= 10) {
        return "tex-green-400"
    }



  }

  return 
  (
  <>
    <p>Clicaste {count} vezes</p>

    <button onClick={() => {
       const novo = count + 1
       setCount(novo)
       setHistory([...history, novo])
    }}
    >
      Clica aqui
    </button>
    <p>Histórico:
       {history.map((c, i) => (<span key={i}>{c}</span>))}
    </p>
  </>
  );


}



